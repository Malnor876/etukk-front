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
  seller: UserSigned
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

  status: LotStatus
  tradeStatus: LotTradeStatus
}


/**
 * Enums are to fit the backend ones
 * to make it easier to understand
 * (a kind of overriding to make more sense).
 * 
 * @example
 * FRONTEND_NAMING = "probably_not_understandable_backend_naming"
 */



export enum LotStatus {
  UNKNOWN = "unknown",

  DRAFTED = "drafted",
  MODERATION = "moderation",
  MODERATION_REJECTED = "moderation_rejected",
  REJECTED = "rejected",
  PUBLISHED = "published",
  SOLD = "sold",
  CLOSED = "closed"
}

export enum LotTradeStatus {
  UNKNOWN = "unknown",

  AWAITING_PAYMENT = "awaiting_payment",
  PAID = "paid",
  AWAITING_SHIPMENT = "awaiting_shipment",
  CONFIRMATION = "confirmation",
  DELIVERY = "delivery",
  DELIVERY_REJECTED = "delivery_rejected",
  DELIVERED = "delivered"
}

export enum LotDelivery {
  all = "intercity",
  local = "in_city"
}