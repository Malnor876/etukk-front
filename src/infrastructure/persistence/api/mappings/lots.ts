import { LotPreviewType, LotType } from "domain/Lot/types"
import { PaginationType } from "interfaces/Nodejs"

import { getLot, getLots } from "../actions/lots"
import { ExtractActionPayload } from "../client.types"

export function mapGetLots(payload: ExtractActionPayload<ReturnType<typeof getLots>>): PaginationType<LotPreviewType> {
  return {
    ...payload,
    items: payload.items.map((item): LotPreviewType => ({
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

export function mapGetLot(payload: ExtractActionPayload<ReturnType<typeof getLot>>): LotType {
  return {
    info: {
      description: payload.content,
      slides: payload.picture,
      specifications: payload.specifications.map(s => ({ key: s.key, value: s.val }))
    },
    seller: {},
    trade: {
      city: payload.address,
      price: payload.price,
      title: payload.name,
      tradeStart: new Date(payload.trading_start),
      tradeEnd: new Date(payload.trading_end)
    }
  }
}