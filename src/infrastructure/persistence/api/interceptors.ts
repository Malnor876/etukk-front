import { userUpdate } from "infrastructure/persistence/redux/reducers/user"
import store from "infrastructure/persistence/redux/store"
import Localization from "modules/localization/controller"
import { QueryError, QueryResponse } from "react-fetching-library"
import { toast } from "react-toastify"
import { createQuery } from "utils/common"

import { Action, APIResponseError } from "./client.types"


type Response<T = unknown> = QueryResponse<T & APIResponseError>

export function endpointTransform(action: Action) {
  const endpoint = process.env.REACT_APP_API_HOST + action.endpoint + "/"
  const query = createQuery(action.params)

  return endpoint + (query && "?" + query)
}

export function requestInterceptor() {
  return async (action: Action): Promise<Action> => {
    return {
      ...action,
      endpoint: endpointTransform(action),
      headers: {
        Authorization: "Basic " + !action.config?.skipAuth && localStorage.getItem("token") || "",
        "Content-Type": "application/json",
        // accept: "application/json",
        // "Accept-Language": Localization.lang
      }
    }
  }
}
export function responseInterceptor() {
  return async (action: Action, response: Response) => {
    console.log(2)
    if (responseHasError(response)) {
      responseErrorHandling(action, response)
      return { ...response, error: true }
    }


    if (response.payload?.uid) {
      localStorage.setItem("token", response.payload.uid)
    }

    return response
  }
}

function responseHasError(response: Response): boolean {
  if ((response.status || 0) >= 400) {
    return true
  }

  if (response.payload == null && response.status === 200) {
    return true
  }

  if (response.payload?.status !== true) {
    return true
  }

  return false
}

function responseErrorHandling(action: Action, response: Response) {
  console.log(1)
  if (response.status === 401) {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    toast.error("Что-то не так с авторизацией")
    toast.info("Токен был сброшен, авторизуйтесь ещё раз")
    store.dispatch(userUpdate({ auth: false }))
  }

  toast.error(response.payload?.msg)

  if (response.error) console.error(new QueryError(`${action.endpoint}: unexpected error`, response))
  if (response.payload == null) console.error(new QueryError(`${action.endpoint}: no payload`, response))

  // return { ...response, error: true }
}
