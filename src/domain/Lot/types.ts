import { UserType } from "infrastructure/persistence/redux/reducers/user/types"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

export interface LotPreviewType {
  id: number
  bookmarked?: boolean
  image: string
  title: string
  city: string
  price: number
  tradeStart: Date
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
  price: Price
  startEndInterval: DateInterval

  delivery: "all" | (string & {})

  id: number
  name: string
  type: UserType
  reviews: {
    likes: number
    dislikes: number
  }
  rating: number

  start: number
  step: number
  current: Price
}
