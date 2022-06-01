/**
 * 
 * This is auto-generated file.
 * All edits will not be preserved for the next generation.
 * 
 * GitHub: https://github.com/FrameMuse/swagger-export-rfl
 * 
*/

import { Action } from "../client.types"
import {
  SchemaLotDeliveryOptions
} from "./schemas"

/**
 * OK
 */
export const postAuthUser = (body: {
  email: string
  password: string
}): Action<{
  access_token: string
  refresh_token: string
}> => ({
  method: "POST",
  endpoint: `/auth/user`,
  body
})

/**
 * OK
 */
export const postRegistrationUser = (body: {
  password: string
  fullname: string
  phonenumber?: string
  email?: string
  inn?: string
  organization?: boolean
}): Action => ({
  method: "POST",
  endpoint: `/registration/user`,
  body
})

/**
 * OK
 */
export const postAuthTokenRefresh = (body: {
  refresh_token: string
}): Action<{
  access_token: string
  refresh_token: string
}> => ({
  method: "POST",
  endpoint: `/auth/token/refresh`,
  body
})

/**
 * OK
 */
export const getUser = (): Action<{
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
}> => ({
  method: "GET",
  endpoint: `/user`
})

/**
 * OK
 */
export const getUserFavoriteLots = (): Action<{
  id: number
  created_at: string
  lot_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/user/favorite/lots`
})

/**
 * OK
 */
export const postUserFavoriteLots = (body: {
  lot_id: number
}): Action<{
  id: number
  created_at: string
  lot_id: number
  user_id: number
}> => ({
  method: "POST",
  endpoint: `/user/favorite/lots`,
  body
})

/**
 * OK
 */
export const getUserFavoriteUser = (): Action<{
  id: number
  created_at: string
  fav_user_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/user/favorite/user`
})

/**
 * OK
 */
export const postUserFavoriteUser = (body: {
  fav_user_id: number
}): Action<{
  id: number
  created_at: string
  fav_user_id: number
  user_id: number
}> => ({
  method: "POST",
  endpoint: `/user/favorite/user`,
  body
})

/**
 * OK
 */
export const getUserNotifications = (): Action<{
  id: number
  user_id: number
  text: string
  lot_id: number
  event_time: string
}> => ({
  method: "GET",
  endpoint: `/user/notifications`
})

/**
 * OK
 */
export const getUserReview = (): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_user_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/user/review`
})

/**
 * OK
 */
export const postUserReview = (body: {
  to_user_id: number
  text?: string
  score: number
}): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_user_id: number
  user_id: number
}> => ({
  method: "POST",
  endpoint: `/user/review`,
  body
})

/**
 * OK
 */
export const getLotDraft = (): Action<{
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
}> => ({
  method: "GET",
  endpoint: `/lot/draft`
})

/**
 * OK
 */
export const postLotDraft = (body: {
  name: string
  description: string
  start_price: number
  categories: number[] | number
  city: string
  delivery_options: SchemaLotDeliveryOptions
  bidding_start_time: string
  bidding_end_time: string
  video_url: string
  lotphotos: string[]
}): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/lot/draft`,
  body
})

/**
 * OK
 */
export const getLot = (): Action<{
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
}> => ({
  method: "GET",
  endpoint: `/lot`
})

/**
 * OK
 */
export const getLotReview = (): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_lot_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/lot/review`
})

/**
 * OK
 */
export const postLotReview = (body: {
  to_lot_id: number
  text?: string
  score: number
}): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_lot_id: number
  user_id: number
}> => ({
  method: "POST",
  endpoint: `/lot/review`,
  body
})

/**
 * of the given arguments and keywords.
 */
export const getDocsSwagger = (): Action => ({
  method: "GET",
  endpoint: `/docs/swagger`
})

/**
 * of the given arguments and keywords.
 */
export const getDocsRedoc = (): Action => ({
  method: "GET",
  endpoint: `/docs/redoc`
})

/**
 * of the given arguments and keywords.
 */
export const getDocs = (): Action => ({
  method: "GET",
  endpoint: `/docs`
})

/**
 * else - return false
 */
export const getRegistrationEmailConfirmByToken = (token: {
  bytes: {

  }
  bytes_le: {

  }
  fields: {

  }
  time_low: {

  }
  time_mid: {

  }
  time_hi_version: {

  }
  clock_seq_hi_variant: {

  }
  clock_seq_low: {

  }
  time: {

  }
  clock_seq: {

  }
  node: {

  }
  hex: {

  }
  urn: {

  }
  variant: {

  }
  version: {

  }
  int: {

  }
  is_safe: {

  }
}): Action => ({
  method: "GET",
  endpoint: `/registration/email/confirm/${token}`
})

/**
 * OK
 */
export const postLotDraftByLotIdModerate = (lot_id: number): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/lot/draft/${lot_id}/moderate`
})

/**
 * OK
 */
export const patchLotDraftByLotIdUnpublish = (lot_id: number): Action<{
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
}> => ({
  method: "PATCH",
  endpoint: `/lot/draft/${lot_id}/unpublish`
})

/**
 * OK
 */
export const patchLotDraftByLotIdArchive = (lot_id: number): Action<{
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
}> => ({
  method: "PATCH",
  endpoint: `/lot/draft/${lot_id}/archive`
})

/**
 * OK
 */
export const getLotByLotIdBet = (lot_id: number): Action<{
  id: number
  amount: number
  created_at: string
  lot_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/lot/${lot_id}/bet`
})

/**
 * OK
 */
export const postLotByLotIdBet = (lot_id: number, multiply?: string): Action<{
  id: number
  amount: number
  created_at: string
  lot_id: number
  user_id: number
}> => ({
  method: "POST",
  endpoint: `/lot/${lot_id}/bet`,
  params: { multiply }
})

/**
 * OK
 */
export const deleteAdminLotByLotIdModerate = (lot_id: number): Action => ({
  method: "DELETE",
  endpoint: `/admin/lot/${lot_id}/moderate`
})

/**
 * OK
 */
export const postAdminLotByLotIdModerate = (lot_id: number): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/admin/lot/${lot_id}/moderate`
})

/**
 * OK
 */
export const deleteAdminLotByLotIdBan = (lot_id: number): Action => ({
  method: "DELETE",
  endpoint: `/admin/lot/${lot_id}/ban`
})

/**
 * OK
 */
export const postAdminLotByLotIdBan = (lot_id: number): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/admin/lot/${lot_id}/ban`
})

/**
 * OK
 */
export const deleteAdminUserByUserIdBan = (user_id: number): Action => ({
  method: "DELETE",
  endpoint: `/admin/user/${user_id}/ban`
})

/**
 * OK
 */
export const postAdminUserByUserIdBan = (user_id: number): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/admin/user/${user_id}/ban`
})

/**
 * OK
 */
export const deleteAdminUserReviewByUserReviewIdBan = (user_review_id: number): Action => ({
  method: "DELETE",
  endpoint: `/admin/user_review/${user_review_id}/ban`
})

/**
 * OK
 */
export const postAdminUserReviewByUserReviewIdBan = (user_review_id: number): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/admin/user_review/${user_review_id}/ban`
})

/**
 * OK
 */
export const deleteAdminLotReviewByUserReviewIdBan = (user_review_id: number): Action => ({
  method: "DELETE",
  endpoint: `/admin/lot_review/${user_review_id}/ban`
})

/**
 * OK
 */
export const postAdminLotReviewByUserReviewIdBan = (user_review_id: number): Action<{
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
}> => ({
  method: "POST",
  endpoint: `/admin/lot_review/${user_review_id}/ban`
})

/**
 * OK
 */
export const getUserByUserId = (user_id?: number): Action<{
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
}> => ({
  method: "GET",
  endpoint: `/user/${user_id}`
})

/**
 * OK
 */
export const patchUserByUserId = (user_id: number, body: Partial<{
  password: string
  firstname: string
  surname: string
  lastname: string
  phonenumber: string
  email: string
  city: string
  address: string
  user_pic: string
}>): Action<{
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
}> => ({
  method: "PATCH",
  endpoint: `/user/${user_id}`,
  body
})

/**
 * OK
 */
export const deleteUserByUserIdPictureByPictureId = (picture_id: number, user_id: number): Action => ({
  method: "DELETE",
  endpoint: `/user/${user_id}/picture/${picture_id}`
})

/**
 * OK
 */
export const deleteUserFavoriteLotsByLotsId = (lots_id?: number): Action => ({
  method: "DELETE",
  endpoint: `/user/favorite/lots/${lots_id}`
})

/**
 * OK
 */
export const getUserFavoriteLotsByLotsId = (lots_id?: number): Action<{
  id: number
  created_at: string
  lot_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/user/favorite/lots/${lots_id}`
})

/**
 * OK
 */
export const deleteUserFavoriteUserByUserId = (user_id?: number): Action => ({
  method: "DELETE",
  endpoint: `/user/favorite/user/${user_id}`
})

/**
 * OK
 */
export const getUserFavoriteUserByUserId = (user_id?: number): Action<{
  id: number
  created_at: string
  fav_user_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/user/favorite/user/${user_id}`
})

/**
 * OK
 */
export const getUserNotificationsByNotificationsId = (notifications_id?: number): Action<{
  id: number
  user_id: number
  text: string
  lot_id: number
  event_time: string
}> => ({
  method: "GET",
  endpoint: `/user/notifications/${notifications_id}`
})

/**
 * OK
 */
export const deleteUserReviewByReviewId = (review_id?: number): Action => ({
  method: "DELETE",
  endpoint: `/user/review/${review_id}`
})

/**
 * OK
 */
export const getUserReviewByReviewId = (review_id?: number): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_user_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/user/review/${review_id}`
})

/**
 * OK
 */
export const patchUserReviewByReviewId = (review_id: number, body: {
  text: string
  score: number
}): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_user_id: number
  user_id: number
}> => ({
  method: "PATCH",
  endpoint: `/user/review/${review_id}`,
  body
})

/**
 * OK
 */
export const deleteLotDraftByDraftId = (draft_id?: number): Action => ({
  method: "DELETE",
  endpoint: `/lot/draft/${draft_id}`
})

/**
 * OK
 */
export const getLotDraftByDraftId = (draft_id?: number): Action<{
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
}> => ({
  method: "GET",
  endpoint: `/lot/draft/${draft_id}`
})

/**
 * OK
 */
export const patchLotDraftByDraftId = (draft_id: number, body: {
  name: string
  description: string
  start_price: number
  categories: number[] | number
  city: string
  delivery_options: SchemaLotDeliveryOptions
  bidding_start_time: string
  bidding_end_time: string
  video_url: string
  photos: string[]
}): Action<{
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
}> => ({
  method: "PATCH",
  endpoint: `/lot/draft/${draft_id}`,
  body
})

/**
 * OK
 */
export const deleteLotByLotIdPhotoByPhotoId = (photo_id: number, lot_id: number): Action => ({
  method: "DELETE",
  endpoint: `/lot/${lot_id}/photo/${photo_id}`
})

/**
 * OK
 */
export const getLotByLotId = (lot_id?: number): Action<{
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
}> => ({
  method: "GET",
  endpoint: `/lot/${lot_id}`
})

/**
 * OK
 */
export const getLotDraftByLotIdSpecification = (lot_id: number): Action<{
  id: number
  name: string
  units?: string | null
  value: string
  lot_id: number
}> => ({
  method: "GET",
  endpoint: `/lot/draft/${lot_id}/specification`
})

/**
 * OK
 */
export const postLotDraftByLotIdSpecification = (lot_id: number, body: {
  name: string
  units?: string
  value: string
  lot_id: number
}): Action<{
  id: number
  name: string
  units?: string | null
  value: string
  lot_id: number
}> => ({
  method: "POST",
  endpoint: `/lot/draft/${lot_id}/specification`,
  body
})

/**
 * OK
 */
export const deleteLotDraftByLotIdSpecificationBySpecificationId = (specification_id: number, lot_id: number): Action => ({
  method: "DELETE",
  endpoint: `/lot/draft/${lot_id}/specification/${specification_id}`
})

/**
 * OK
 */
export const getLotDraftByLotIdSpecificationBySpecificationId = (specification_id: number, lot_id: number): Action<{
  id: number
  name: string
  units?: string | null
  value: string
  lot_id: number
}> => ({
  method: "GET",
  endpoint: `/lot/draft/${lot_id}/specification/${specification_id}`
})

/**
 * OK
 */
export const patchLotDraftByLotIdSpecificationBySpecificationId = (specification_id: number, lot_id: number, body: {
  name: string
  units: string
  value: string
}): Action<{
  id: number
  name: string
  units?: string | null
  value: string
  lot_id: number
}> => ({
  method: "PATCH",
  endpoint: `/lot/draft/${lot_id}/specification/${specification_id}`,
  body
})

/**
 * OK
 */
export const deleteLotReviewByReviewId = (review_id?: number): Action => ({
  method: "DELETE",
  endpoint: `/lot/review/${review_id}`
})

/**
 * OK
 */
export const getLotReviewByReviewId = (review_id?: number): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_lot_id: number
  user_id: number
}> => ({
  method: "GET",
  endpoint: `/lot/review/${review_id}`
})

/**
 * OK
 */
export const patchLotReviewByReviewId = (review_id: number, body: {
  text: string
  score: number
}): Action<{
  id: number
  text?: string | null
  score: number
  created_at: string
  banned?: boolean
  to_lot_id: number
  user_id: number
}> => ({
  method: "PATCH",
  endpoint: `/lot/review/${review_id}`,
  body
})
