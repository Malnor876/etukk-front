import { LotPreviewType, LotType } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"

import { SchemaLotsContentItem, SchemaLotsLists } from "../data/schemas"
import { mapImageUrl } from "./helpers"

export function mapGetGetLots({ result }: SchemaLotsLists): PaginationType<LotPreviewType> {
  return {
    ...result,
    items: result.items.map((item): LotPreviewType => ({
      id: item.id,
      bookmarked: item.id === 1,
      image: item.picture,
      city: item.address,
      title: item.name,
      price: item.price,
      tradeStart: new Date(item.started)
    }))
  }
}

export function mapGetGetLotById({ result }: SchemaLotsContentItem): LotType {
  return {
    info: {
      description: result.content,
      slides: result.picture.map(mapImageUrl),
      specifications: result.specifications?.map(s => ({ key: s.key, value: s.val })) || []
    },
    seller: {},
    trade: {
      city: result.address,
      price: result.price,
      title: result.name,
      tradeStart: new Date(result.trading_start),
      tradeEnd: new Date(result.trading_end)
    },
    bid: {
      start: result.price_step,
      current: result.price,
      step: result.price_step
    }
  }
}