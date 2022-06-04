import { LotDelivery, LotInfoType, LotPreviewType, LotStatus } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"
import { DeepPartial } from "redux"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

import { SchemaLot } from "../data/schemas"
import { mapImageUrl } from "./helpers"

export function mapLotPreview(lot?: {
  id: number
  name?: string | null
  description?: string | null
  start_price?: number | null
  city?: string | null
  delivery_options?: string | null
  video_url?: string | null
  archived?: boolean
  banned?: boolean
  bidding_start_time?: string | null
  bidding_end_time?: string | null
  reject_reason?: string | null
  now_price?: number | null
  status?: string
  trade_status?: string | null
  views?: number
  favorites?: number
  created_at: string
  edited_at: string
  buyer_id?: number | null
  user_id: number
}): LotPreviewType {
  return {
    id: lot?.id || -1,
    bookmarked: Boolean(lot?.favorites),
    image: mapImageUrl(""),
    city: lot?.city || "unknown",
    title: lot?.name || "unknown",
    startPrice: new Price(lot?.start_price || -1),
    currentPrice: new Price(lot?.now_price || -1),
    tradeStartTime: new Date(lot?.bidding_start_time || 0),
    tradeEndTime: new Date(lot?.bidding_end_time || 0),
    status: (lot?.status as LotStatus) || LotStatus.UNKNOWN,
    betsCount: -1
  }
}

export function mapLotsLists(lots: {
  id: number
  name?: string | null
  description?: string | null
  start_price?: number | null
  city?: string | null
  delivery_options?: string | null
  video_url?: string | null
  archived?: boolean
  banned?: boolean
  bidding_start_time?: string | null
  bidding_end_time?: string | null
  reject_reason?: string | null
  now_price?: number | null
  status?: string
  trade_status?: string | null
  views?: number
  favorites?: number
  created_at: string
  edited_at: string
  buyer_id?: number | null
  user_id: number
}[]): PaginationType<LotPreviewType> {
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
    reviews: { dislikes: 1, likes: 1 }, //! default
    type: "organization", //! default

    bookmarked: false, //! default
    description: payload.description || "unknown",
    slides: [], //! default
    specifications: [], //! default

    city: payload.city || "unknown",
    startEndInterval: new DateInterval(payload.bidding_start_time, payload.bidding_end_time),

    startPrice: new Price(payload.start_price || -1),
    currentPrice: new Price(payload.now_price || -1),
  }
}

// export function map

export function mapFiltersCategory(asd: any) {
  // return {}
  return recurseCollapsedTree(asd)
}

interface CollapsedTreeElement {
  id: number
  name: string

  parent_category_id: number | null
}

export interface RecursiveTreeElement {
  id: number
  name: string

  parent_category_id: number | null
  children: RecursiveTreeElement[]
}

function recurseCollapsedTree(collapsedTree: CollapsedTreeElement[]): RecursiveTreeElement[] {
  function recurse(tree: CollapsedTreeElement[]): RecursiveTreeElement[] {
    return tree.map(treeElement => {
      const asd = collapsedTree.filter(collapsedTreeElement => collapsedTreeElement.parent_category_id === treeElement.id)
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