export interface LotPreviewType {
  id: number
  bookmarked: boolean
  image: string
  title: string
  city: string
  price: number
  tradeStart: Date
}

export interface LotType {
  info: LotInfoType
  trade: LotTradeType
  seller: LotSellerType
  bid: LotBidType
}

export interface LotInfoType {
  slides: string[]
  bookmarked?: boolean
  description: string
  specifications: {
    key: string
    value: string
  }[]
}

export interface LotTradeType {
  title: string
  city: string
  price: number
  tradeStart: Date
  tradeEnd: Date
}

export interface LotSellerType { }
export interface LotBidType {
  start: number
  step: number
  current: number
}