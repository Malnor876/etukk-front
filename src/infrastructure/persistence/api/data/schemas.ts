/**
 * 
 * This is auto-generated file.
 * All edits will not be preserved for the next generation.
 * 
 * GitHub: https://github.com/FrameMuse/swagger-export-rfl
 * 
*/


export interface SchemaUser {
  id: number
  password: string
  salt: string
  fullname: string
  phonenumber: string
  email?: string | null
  city?: string | null
  address?: string | null
  inn?: string | null
  organization?: boolean
  created_at: string
  last_login?: string | null
  last_active: string
  last_logout?: string | null
  seller_rating?: number
  verified?: boolean
  banned?: boolean
  user_pic_id?: number | null
}

export interface SchemaUserFavoriteLots {
  id: number
  created_at: string
  lot_id: number
  user_id: number
}

export interface SchemaUserFavoriteUsers {
  id: number
  created_at: string
  fav_user_id: number
  user_id: number
}

export interface SchemaUserNotifications {
  id: number
  user_id: number
  text: string
  lot_id: number
  event_time: string
}

export interface SchemaUserReview {
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_user_id: number
  user_id: number
}

export interface SchemaLot {
  id: number
  name?: string | null
  description?: string | null
  start_price?: number | null
  city?: string | null
  delivery_options?: string | null
  video_url?: string | null
  archived?: boolean
  banned?: boolean
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
  in_user_favorites?: boolean
  lotphotos?: {
    id: number
    lot_id: number
    filename: string
  }[]
  lotspecifications?: {
    name: string
    units: string
    value: string
  }[]
}

export type SchemaLotDeliveryOptions = "in_city" | "intercity"

export interface SchemaLotReview {
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_lot_id: number
  user_id: number
}

export interface SchemaCategory {
  id: number
  name: string
  parent_category_id?: number | null
}

export interface SchemaBet {
  id: number
  amount: number
  created_at: string
  lot_id: number
  user_id: number
}

export interface SchemaLotSpecification {
  id: number
  name: string
  units?: string | null
  value: string
  lot_id: number
}
