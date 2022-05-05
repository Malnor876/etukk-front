import { MapActions } from "infrastructure/persistence/redux/store.types"
import { ValuesOf } from "interfaces/utilities"

import { User } from "./types"

function getCachedUser(): User | null {
  const value = localStorage.getItem("user")
  if (value === null) return null

  try {
    return JSON.parse(value)
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(error)
    }
    return null
  }
}

const initialState: User = getCachedUser() || {
  auth: false
}

interface Actions {
  USER_UPDATE: User
}

type Action = ValuesOf<MapActions<Actions>>


export default (state = initialState, action: Action): User => {
  switch (action.type) {

    case "USER_UPDATE": {
      const nextState = { ...state, ...action.payload }
      localStorage.setItem("user", JSON.stringify(nextState))
      return nextState
    }

    default:
      return state
  }
}

/* Plain Actions */

export const userUpdate = (payload: Actions["USER_UPDATE"]) => ({
  type: "USER_UPDATE",
  payload
}) as const

/* Thunk Actions */

