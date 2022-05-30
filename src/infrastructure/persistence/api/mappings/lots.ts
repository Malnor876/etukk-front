import { LotInfoType, LotPreviewType } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"
import { DeepPartial } from "redux"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

import { SchemaCategoryLists, SchemaLotsContentItem, SchemaLotsItem, SchemaLotsLists } from "../data/schemas"
import { mapImageUrl } from "./helpers"

export function mapLotsItem(item?: Partial<SchemaLotsItem>): LotPreviewType {
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

export function mapLotsLists({ result }: DeepPartial<SchemaLotsLists>): PaginationType<LotPreviewType> {
  return {
    current: result?.current || -1,
    limit: result?.limit || -1,
    items: (result?.items || []).map(mapLotsItem)
  }
}

export function mapLotsContentItem({ result }: SchemaLotsContentItem): LotInfoType {
  return {
    id: result.id,
    delivery: result.delivery,
    name: result.name,
    rating: 10,
    reviews: { dislikes: 1, likes: 1 },
    type: "organization",

    bookmarked: Boolean(result.favorite),
    description: result.content,
    slides: result.picture.map(mapImageUrl),
    specifications: result.specifications?.map(s => ({ key: s.key, value: s.val })) || [],

    city: result.city,
    price: new Price(result.price),
    title: result.name,
    startEndInterval: new DateInterval(new Date(result.trading_start), new Date(result.trading_end)),

    start: result.price_step,
    current: new Price(result.price),
    step: result.price_step
  }
}

// export function map

export function mapFiltersCategory({ result }: SchemaCategoryLists) {
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