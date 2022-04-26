import { SchemaNotifications, SchemaUsersCabinet, SchemaUserSettingsGet } from "../data/schemas"
import { mapUserType } from "./user"

export function mapCabinet(payload: SchemaUsersCabinet) {
  return {
    ...payload.result,
    type: mapUserType(payload.result.type)
  }
}

export function mapCabinetNotifications({ result }: SchemaNotifications) {
  return result.map(item => ({
    ...item,
    createdDate: new Date(item.date_create)
  }))
}

export function mapCabinetUsersSettings({ result }: SchemaUserSettingsGet): Record<"bidUpConfirm" | "smsOnSubscriptionsChange" | "smsOnBidChange", boolean> {
  return {
    bidUpConfirm: result.increase,
    smsOnSubscriptionsChange: result.subscriptions,
    smsOnBidChange: result.bidding
  }
}