import { LotPreviewType, LotType } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"

import { SchemaCategoryLists, SchemaLotsContentItem, SchemaLotsItem, SchemaLotsLists } from "../data/schemas"
import { mapImageUrl } from "./helpers"

export function mapLotsItem(item: SchemaLotsItem): LotPreviewType {
  return {
    id: item.id,
    bookmarked: Boolean(item.favorite),
    image: mapImageUrl(item.picture),
    city: item.city,
    title: item.name,
    price: item.price,
    tradeStart: new Date(item.trading_start)
  }
}

export function mapLotsLists({ result }: SchemaLotsLists): PaginationType<LotPreviewType> {
  return {
    ...result,
    items: result.items.map(mapLotsItem)
  }
}

export function mapLotsContentItem({ result }: SchemaLotsContentItem): LotType {
  return {
    info: {
      bookmarked: Boolean(result.favorite),
      description: result.content,
      slides: result.picture.map(mapImageUrl),
      specifications: result.specifications?.map(s => ({ key: s.key, value: s.val })) || []
    },
    seller: result.users_info,
    trade: {
      city: result.city,
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

// export function map

export function mapFiltersCategory({ result }: SchemaCategoryLists) {
  return {
    ...result,
    cities: result.cities.map(city => city.city)
  }
}