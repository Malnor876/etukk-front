import { PaginationType } from "interfaces/Nodejs"

import { Action } from "../client.types"

export const getLots = (limit: number, current: number): Action<PaginationType<
  {
    id: number
    name: string
    price: number
    picture: string
    address: string
    started: string
    users: {
      id: number
      name: string
      pricture: string
      address: string
      rating_buyer: 5
      rating_seller: 5
    }
  }
>> => ({
  method: "GET",
  endpoint: "/get/lots",
  params: { limit, current }
})

export const getLot = (id: number): Action<{
  name: string
  content: string
  specifications: {
    key: string
    val: string
  }[]
  picture: string[]
  video: string
  address: string
  trading_start: string
  trading_end: string
  started: string
  redeemed: boolean
  price: number
  price_step: number
  price_bids: {
    users: string
    bet: number
    date: string
  }[]
  binds_number: number
  bind_current: number
}> => ({
  method: "GET",
  endpoint: `/get/lots/${id}`
})