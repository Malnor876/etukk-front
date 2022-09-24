import {createClient, QueryResponse} from "react-fetching-library"

import {cacheProvider} from "./cache"
import {requestInterceptor, responseInterceptor} from "./interceptors"

export const ClientAPI = createClient({
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
  cacheProvider,
  fetch: async (input, init) => {
    const response = fetch(input, init)
    // Error displaying

    if (process.env.NODE_ENV === "development") {
      response.catch(error => {
        if (error.message.includes("The user aborted a request.")) return
        console.log(error)
        throw error
      })
    }
    // ...
    return response
  },
})

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.ClientAPI = ClientAPI
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  window.ActionsAPI = require("./data/actions")
}

export function isValidResponse<T>(
  response: QueryResponse<T>,
  throwError = false
): response is Required<typeof response> {
  if (response.error) {
    if (throwError) {
      throw response.errorObject
    }

    return false
  }

  if (response.headers == null || response.status == null) {
    return false
  }

  return true
}

export default ClientAPI
