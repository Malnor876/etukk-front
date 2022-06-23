import { UserSigned, UserType } from "infrastructure/persistence/redux/reducers/user/types"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

export interface LotPreviewType {
  id: number
  bookmarked?: boolean
  image: string
  title: string
  city: string
  startPrice: Price
  currentPrice: Price
  tradeStartTime: Date
  tradeEndTime: Date
  betsCount: number

  status: LotStatus
  tradeStatus: LotTradeStatus

  editedAt: Date
}

export type LotInfoSpecificationsType = {
  key: string
  value: string
}[]
export interface LotInfoType {
  slides: string[]
  bookmarked?: boolean
  description: string
  specifications: LotInfoSpecificationsType

  title: string
  city: string
  startEndInterval: DateInterval

  delivery: LotDelivery

  id: number
  type: UserType
  reviews: {
    likes: number
    dislikes: number
  }
  rating: number

  betStep: Price
  startPrice: Price
  currentPrice: Price

  creatorId: number
  seller: UserSigned
}




export enum LotStatus {
  UNKNOWN = "unknown",

  DRAFTED = "drafted",
  MODERATION = "moderation",
  REJECTED = "rejected",
  PUBLISHED = "published",
  SOLD = "sold",
  CLOSED = "closed"
}

export enum LotTradeStatus {
  UNKNOWN = "unknown",

  AWAITING_PAYMENT = "awaiting_payment",
  PAID = "paid",
  AWAITING_DELIVER = "awaiting_deliver",
  DELIVERED = "delivered"
}

export enum LotDelivery {
  all = "intercity",
  local = "in_city"
}