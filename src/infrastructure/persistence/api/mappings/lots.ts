import { LotInfoType, LotPreviewType } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"
import { DeepPartial } from "redux"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

import { mapImageUrl } from "./helpers"

export function mapLotsItem(item?: any): LotPreviewType {
  return {
    id: item?.id || -1,
    bookmarked: Boolean(item?.favorite),
    image: mapImageUrl(item?.picture || "unknown"),
    city: item?.city || "unknown",
    title: item?.name || "unknown",
    price: item?.price || -1,
    tradeStart: new Date(item?.trading_start || 0),
  }
}

export function mapLotsLists({ result }: any): PaginationType<LotPreviewType> {
  return {
    current: result?.current || -1,
    limit: result?.limit || -1,
    items: (result?.items || []).map(mapLotsItem)
  }
}

export function mapLotByLotId(payload: {
  id: number
  name?: string | null
  description?: string | null
  start_price?: number | null
  city?: string | null
  delivery_options?: string | null
  video_url?: string | null
  archived?: boolean
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
}): LotInfoType {
  return {
    id: payload.id,
    delivery: payload.delivery_options === "in_city" ? "local" : "all",
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
    currentBid: new Price(payload.now_price || -1),
  }
}

// export function map

export function mapFiltersCategory({ result }: any) {
  return {}
  // return {
  //   ...result,
  //   categories: recurseCollapsedTree(result.category),
  //   cities: result.cities.map(city => city.city)
  // }
}

interface CollapsedTreeElement {
  id: number
  name: string

  parent: number | null
  level: number
}

export interface RecursiveTreeElement {
  id: number
  name: string

  parent: number | null
  children: RecursiveTreeElement[]
}

function recurseCollapsedTree(collapsedTree: CollapsedTreeElement[], startLevel = 1): RecursiveTreeElement[] {
  return collapsedTree.filter(testTreeElement => testTreeElement.level === startLevel).map(treeElement => (
    {
      id: treeElement.id,
      name: treeElement.name,
      parent: treeElement.parent,
      children: recurseCollapsedTree(collapsedTree, startLevel + 1).filter(testTreeElement => testTreeElement.parent === treeElement.id)
    }
  ))
}