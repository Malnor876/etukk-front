import { LotDelivery, LotInfoType, LotPreviewType, LotStatus, LotTradeStatus } from "areas/lot/types"
import { PaginationType } from "interfaces/Nodejs"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

import { SchemaLot } from "../data/schemas"
import { mapImageUrl } from "./helpers"
import { mapUser } from "./user"


/**
 * 
 * @deprecated
 */
export function mapLotPreview(lot: SchemaLot): LotPreviewType {
  return mapLot(lot)
  // return {
  //   id: lot?.id ?? -1,
  //   bookmarked: lot?.in_user_favorites ?? false,
  //   image: mapImageUrl(lot?.lotphotos?.[0]?.filename),
  //   city: lot?.city ?? "unknown",
  //   title: lot?.name ?? "unknown",
  //   startPrice: new Price(lot?.start_price ?? -1),
  //   currentPrice: new Price(lot?.now_price ?? -1),
  //   tradeStartTime: new Date(lot?.bidding_start_time ?? 0),
  //   tradeEndTime: new Date(lot?.bidding_end_time ?? 0),
  //   status: (lot?.status as LotStatus) ?? LotStatus.UNKNOWN,
  //   tradeStatus: (lot?.trade_status as LotTradeStatus) ?? LotTradeStatus.UNKNOWN,
  //   betsCount: lot?.bets_count ?? -1,
  //   editedAt: new Date(lot?.edited_at ?? -1),
  //   seller: mapUser(lot?.user)
  // }
}

export function mapLotsLists(lots: SchemaLot[]): PaginationType<LotPreviewType> {
  return {
    current: 1,
    limit: 100,
    items: lots.map(mapLotPreview)
  }
}

export function mapLot(payload: SchemaLot): LotInfoType {
  return {
    id: payload.id,
    delivery: payload.delivery_options as LotDelivery,
    title: payload.name || "unknown",
    rating: -1,//! default
    reviews: { dislikes: -1, likes: -1 }, //! default
    type: "organization", //! default

    bookmarked: payload.in_user_favorites ?? false,
    description: payload.description ?? "unknown",
    slides: payload.lotphotos?.map(l => mapImageUrl(l.filename)) ?? [],
    specifications: payload.lotspecifications?.map(spec => ({ key: spec.name, value: spec.value })) ?? [],

    city: payload.city ?? "unknown",
    startEndInterval: new DateInterval(payload.bidding_start_time, payload.bidding_end_time),

    betStep: new Price(payload.bet_step ?? -1),
    startPrice: new Price(payload.start_price ?? -1),
    currentPrice: new Price(payload.now_price ?? -1),

    seller: mapUser(payload.user as any),
    buyer: mapUser(payload.user as any),

    status: (payload?.status as LotStatus) ?? LotStatus.UNKNOWN,
    tradeStatus: (payload?.trade_status as LotTradeStatus) ?? LotTradeStatus.UNKNOWN,

    editedAt: new Date(payload?.edited_at ?? -1),

    image: mapImageUrl(payload?.lotphotos?.[0]?.filename),
    tradeStartTime: new Date(payload?.bidding_start_time ?? 0),
    tradeEndTime: new Date(payload?.bidding_end_time ?? 0),
    betsCount: payload?.bets_count ?? -1,
  }
}

// export function map

export function mapFiltersCategory(asd: any) {
  // return {}
  return recurseCollapsedTree(asd)
}

export interface CollapsedTreeElement {
  id: number
  name: string

  parent_category_id?: number | null
}

export interface RecursiveTreeElement {
  id: number
  name: string

  parent_category_id?: number | null
  children: RecursiveTreeElement[]
}

export function recurseCollapsedTree(collapsedTree: CollapsedTreeElement[]): RecursiveTreeElement[] {
  function recurse(tree: CollapsedTreeElement[]): RecursiveTreeElement[] {
    return tree.map(treeElement => {
      const asd = collapsedTree.filter(collapsedTreeElement => collapsedTreeElement?.parent_category_id === treeElement.id)
      return {
        ...treeElement,
        children: recurse(asd)
      }
    })
  }
  return recurse(collapsedTree.filter(c => c.parent_category_id == null))
  // return collapsedTree.map(treeElement => (
  //   {
  //     id: treeElement.id,
  //     name: treeElement.name,
  //     parent_category_id: treeElement.parent_category_id,
  //     children: recurseCollapsedTree(collapsedTree, startLevel + 1).filter(testTreeElement => testTreeElement.parent_category_id === treeElement.id)
  //   }
  // ))
}