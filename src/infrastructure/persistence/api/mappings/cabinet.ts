import { LotPreviewType } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"

import { SchemaLotDisputesLists, SchemaLotsConfirmLists, SchemaLotsWayLists, SchemaLotsWonLists, SchemaNotifications, SchemaUsersCabinet, SchemaUserSettingsGet } from "../data/schemas"
import { mapLotsItem } from "./lots"
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

/**
 * 
 * @deprecated should be rewritten
 */
export function mapLotDisputesLists({ result }: any): { items: LotPreviewType[] } {
  return {
    // ...result,
    items: result.map(mapLotsItem)
  }
}

