import { Action } from "../client.types"
import {
  SchemaAdvertising,
  SchemaAdvertisingFollowLink,
  SchemaBlogsContentItem,
  SchemaBlogsLists,
  SchemaCategoryLists,
  SchemaChatUsers,
  SchemaChatUsersAdd,
  SchemaChatUsersFormAdd,
  SchemaChatUsersLists,
  SchemaClaims,
  SchemaClaimsAdd,
  SchemaContent,
  SchemaDeliveryPrice,
  SchemaDeliveryZone,
  SchemaInlineResponse200,
  SchemaLikesGet,
  SchemaLotsContentItem,
  SchemaLotsLists,
  SchemaLotsPlaceBet,
  SchemaNewsItemContent,
  SchemaNewsLists,
  SchemaNotifications,
  SchemaNotificationsReadBody,
  SchemaOk,
  SchemaPagesMenu,
  SchemaPeriod,
  SchemaPrice,
  SchemaRecommendations,
  SchemaReviewsAdd,
  SchemaSearchLists,
  SchemaUsersAuthOk,
  SchemaUsersCabinet,
  SchemaUsersCoordinate,
  SchemaUsersCoordinate1,
  SchemaUsersForgotRequest,
  SchemaUsersForgotReset,
  SchemaUsersLotsFormData,
  SchemaUsersLotsLists,
  SchemaUsersPhone,
  SchemaUsersSignin,
  SchemaUsersSignUp
} from "./schemas"

export const getGetPagesByPagesId = (pages_id: number): Action<SchemaContent> => ({
  method: "GET",
  endpoint: `/get/pages/${pages_id}`
})

export const getGetPagesByUrl = (url: string): Action<SchemaContent> => ({
  method: "GET",
  endpoint: `/get/pages/${url}`
})

export const getGetMenu = (): Action<SchemaPagesMenu> => ({
  method: "GET",
  endpoint: `/get/menu`
})

export const getGetBreadcrumbsByPagesId = (pages_id: number): Action<SchemaPagesMenu> => ({
  method: "GET",
  endpoint: `/get/breadcrumbs/${pages_id}`
})

export const getGetFilters = (price?: SchemaPrice[], category?: number[], seller_type?: string, delivery?: string, period?: SchemaPeriod[], started?: number): Action<SchemaSearchLists> => ({
  method: "GET",
  endpoint: `/get/filters`,
  params: { price, category, seller_type, delivery, period, started }
})

export const getGetFiltersCategory = (): Action<SchemaCategoryLists> => ({
  method: "GET",
  endpoint: `/get/filters/category`
})

export const getGetSearch = (s?: string, limit?: number, current?: number): Action<SchemaSearchLists> => ({
  method: "GET",
  endpoint: `/get/search`,
  params: { s, limit, current }
})

export const getGetRecommendations = (): Action<SchemaRecommendations> => ({
  method: "GET",
  endpoint: `/get/recommendations`
})

export const getGetDeliveryAddress = (users_coordinate?: SchemaUsersCoordinate): Action<SchemaDeliveryPrice> => ({
  method: "GET",
  endpoint: `/get/delivery/address`,
  params: { users_coordinate }
})

export const getGetDeliveryZone = (users_coordinate?: SchemaUsersCoordinate1, city?: string): Action<SchemaDeliveryZone> => ({
  method: "GET",
  endpoint: `/get/delivery/zone`,
  params: { users_coordinate, city }
})

export const getGetAdvertising = (): Action<SchemaAdvertising> => ({
  method: "GET",
  endpoint: `/get/advertising`
})

export const getGetAdvertisingFollowLinkByUid = (uid: string): Action<SchemaAdvertisingFollowLink> => ({
  method: "GET",
  endpoint: `/get/advertising/follow_link/${uid}`
})

export const getGetNews = (limit?: number, current?: number): Action<SchemaNewsLists> => ({
  method: "GET",
  endpoint: `/get/news`,
  params: { limit, current }
})

export const getGetNewsById = (id: number): Action<SchemaNewsItemContent> => ({
  method: "GET",
  endpoint: `/get/news/${id}`
})

export const getGetBlogs = (limit?: number, current?: number): Action<SchemaBlogsLists> => ({
  method: "GET",
  endpoint: `/get/blogs`,
  params: { limit, current }
})

export const getGetBlogsById = (id: number): Action<SchemaBlogsContentItem> => ({
  method: "GET",
  endpoint: `/get/blogs/${id}`
})

export const getGetLots = (limit?: number, current?: number): Action<SchemaLotsLists> => ({
  method: "GET",
  endpoint: `/get/lots`,
  params: { limit, current }
})

export const getGetLotsById = (id: number): Action<SchemaLotsContentItem> => ({
  method: "GET",
  endpoint: `/get/lots/${id}`
})

export const postCabinetLotsPlaceBet = (body: SchemaLotsPlaceBet): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/lots/place_bet`,
  body
})

export const getCabinet = (): Action<SchemaUsersCabinet> => ({
  method: "GET",
  endpoint: `/cabinet`
})

export const getCabinetLots = (limit?: number, current?: number, status?: number): Action<SchemaUsersLotsLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots`,
  params: { limit, current, status }
})

export const deleteCabinetLotsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "DELETE",
  endpoint: `/cabinet/lots/delete/${id}`
})

export const getCabinetLotsAdd = (id?: number): Action<SchemaInlineResponse200> => ({
  method: "GET",
  endpoint: `/cabinet/lots/add`,
  params: { id }
})

export const postCabinetLotsAdd = (body: SchemaUsersLotsFormData): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/lots/add`,
  body
})

export const deleteCabinetReviewsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "DELETE",
  endpoint: `/cabinet/reviews/delete/${id}`
})

export const postCabinetReviewsAdd = (body: SchemaReviewsAdd): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/reviews/add`,
  body
})

export const getCabinetNotifications = (): Action<SchemaNotifications> => ({
  method: "GET",
  endpoint: `/cabinet/notifications`
})

export const postCabinetNotificationsRead = (body: SchemaNotificationsReadBody): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/notifications/read`,
  body
})

export const getCabinetLikes = (entity: string, id: number): Action<SchemaLikesGet> => ({
  method: "GET",
  endpoint: `/cabinet/likes`,
  params: { entity, id }
})

export const getCabinetDislikesAdd = (entity: string, id: number): Action<SchemaLikesGet> => ({
  method: "GET",
  endpoint: `/cabinet/dislikes/add`,
  params: { entity, id }
})

export const getCabinetLikesAdd = (entity: string, id: number): Action<SchemaLikesGet> => ({
  method: "GET",
  endpoint: `/cabinet/likes/add`,
  params: { entity, id }
})

export const getCabinetChat = (limit?: number, current?: number): Action<SchemaChatUsersLists> => ({
  method: "GET",
  endpoint: `/cabinet/chat`,
  params: { limit, current }
})

export const getCabinetChatByChatUsers = (chat_users: number, limit?: number, current?: number): Action<SchemaChatUsers> => ({
  method: "GET",
  endpoint: `/cabinet/chat/${chat_users}`,
  params: { limit, current }
})

export const postCabinetChatByChatUsersAdd = (chat_users: number, body: SchemaChatUsersFormAdd): Action<SchemaChatUsersAdd> => ({
  method: "POST",
  endpoint: `/cabinet/chat/${chat_users}/add`,
  body
})

export const getCabinetClaims = (limit?: number, current?: number): Action<SchemaClaims> => ({
  method: "GET",
  endpoint: `/cabinet/claims`,
  params: { limit, current }
})

export const postCabinetClaimsAdd = (body: SchemaClaimsAdd): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/claims/add`,
  body
})

export const deleteCabinetClaimsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "DELETE",
  endpoint: `/cabinet/claims/delete/${id}`
})

export const postUsersPhoneSet = (body: SchemaUsersPhone): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/users/phone_set`,
  body
})

export const getUsersConfirmByConfirmKey = (confirm_key: string): Action<SchemaOk> => ({
  method: "GET",
  endpoint: `/users/confirm/${confirm_key}`
})

export const postUsersForgot = (body: SchemaUsersForgotRequest): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/users/forgot`,
  body
})

export const getUsersForgotByConfirmKey = (confirm_key: string): Action<SchemaOk> => ({
  method: "GET",
  endpoint: `/users/forgot/${confirm_key}`
})

export const postUsersForgotByConfirmKey = (confirm_key: string, body: SchemaUsersForgotReset): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/users/forgot/${confirm_key}`,
  body
})

export const getUsersSignupBySocialKey = (social_key: string): Action<SchemaUsersAuthOk> => ({
  method: "GET",
  endpoint: `/users/signup/${social_key}`
})

export const postUsersSignup = (body: SchemaUsersSignUp): Action<SchemaUsersAuthOk> => ({
  method: "POST",
  endpoint: `/users/signup`,
  body
})

export const postUsersSignin = (body: SchemaUsersSignin): Action<SchemaUsersAuthOk> => ({
  method: "POST",
  endpoint: `/users/signin`,
  body
})
