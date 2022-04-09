import { SchemaUsersCabinet } from "../data/schemas"
import { mapUserType } from "./user"

export function mapCabinet(payload: SchemaUsersCabinet) {
  return {
    ...payload.result,
    type: mapUserType(payload.result.type)
  }
}