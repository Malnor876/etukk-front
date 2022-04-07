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
  SchemaFavorite,
  SchemaFavoriteAddResponse,
  SchemaFavoriteList,
  SchemaFavoriteUsers,
  SchemaLikes,
  SchemaLikesGet,
  SchemaLotsContentItem,
  SchemaLotsGetFormData,
  SchemaLotsLists,
  SchemaLotsPlaceBet,
  SchemaNewsItemContent,
  SchemaNewsLists,
  SchemaNotifications,
  SchemaOk,
  SchemaPagesMenu,
  SchemaRecommendations,
  SchemaReviewsAdd,
  SchemaSearchLists,
  SchemaUsersAuthOk,
  SchemaUsersCabinet,
  SchemaUsersForgotRequest,
  SchemaUsersForgotReset,
  SchemaUsersLotsFormData,
  SchemaUsersLotsLists,
  SchemaUsersPhone,
  SchemaUsersSignin,
  SchemaUsersSignUp
} from "./schemas"

/**
 * Get content page data
 */
export const getGetPagesByPagesId = (pages_id: number): Action<SchemaContent> => ({
  method: "GET",
  endpoint: `/get/pages/${pages_id}`
})

/**
 * Get content page data
 */
export const getGetPagesByUrl = (url: string): Action<SchemaContent> => ({
  method: "GET",
  endpoint: `/get/pages/${url}`
})

/**
 * Меню
 */
export const getGetMenu = (): Action<SchemaPagesMenu> => ({
  method: "GET",
  endpoint: `/get/menu`
})

/**
 * Хлебные крошки
 */
export const getGetBreadcrumbsByPagesId = (pages_id: number): Action<SchemaPagesMenu> => ({
  method: "GET",
  endpoint: `/get/breadcrumbs/${pages_id}`
})

/**
 * Вывод лотов из выбранных параметров
 */
export const getGetFilters = (price: {
  min: number
  max: number
}[], category: number[], seller_type: "all" | "users" | "legal_entity", delivery: "all" | "other_regions" | "only_city", period: {
  date_start: string
  date_end: string
}[], started: number): Action<SchemaSearchLists> => ({
  method: "GET",
  endpoint: `/get/filters`,
  params: { price, category, seller_type, delivery, period, started }
})

/**
 * Параметры фильтра
 */
export const getGetFiltersCategory = (): Action<SchemaCategoryLists> => ({
  method: "GET",
  endpoint: `/get/filters/category`
})

/**
 * поисковый модуль в виде бесконечной ленты
 */
export const getGetSearch = (s: string, limit: number, current: number): Action<SchemaSearchLists> => ({
  method: "GET",
  endpoint: `/get/search`,
  params: { s, limit, current }
})

/**
 * Recommendations
 */
export const getGetRecommendations = (): Action<SchemaRecommendations> => ({
  method: "GET",
  endpoint: `/get/recommendations`
})

/**
 * Получении стоимости доставки по координатам
 */
export const getGetDeliveryAddress = (users_coordinate: {
  latitude: number
  longitude: number
}): Action<SchemaDeliveryPrice> => ({
  method: "GET",
  endpoint: `/get/delivery/address`,
  params: { users_coordinate }
})

/**
 * Зоны доставки
 */
export const getGetDeliveryZone = (users_coordinate: {
  latitude: number
  longitude: number
}, city: string): Action<SchemaDeliveryZone> => ({
  method: "GET",
  endpoint: `/get/delivery/zone`,
  params: { users_coordinate, city }
})

/**
 * Advertising
 */
export const getGetAdvertising = (): Action<SchemaAdvertising> => ({
  method: "GET",
  endpoint: `/get/advertising`
})

/**
 * follow the link
 */
export const getGetAdvertisingFollowLinkByUid = (uid: string): Action<SchemaAdvertisingFollowLink> => ({
  method: "GET",
  endpoint: `/get/advertising/follow_link/${uid}`
})

/**
 * News lists
 */
export const getGetNews = (limit: number, current: number): Action<SchemaNewsLists> => ({
  method: "GET",
  endpoint: `/get/news`,
  params: { limit, current }
})

/**
 * News item
 */
export const getGetNewsById = (id: number): Action<SchemaNewsItemContent> => ({
  method: "GET",
  endpoint: `/get/news/${id}`
})

/**
 * Blogs lists
 */
export const getGetBlogs = (limit: number, current: number): Action<SchemaBlogsLists> => ({
  method: "GET",
  endpoint: `/get/blogs`,
  params: { limit, current }
})

/**
 * Blogs item content
 */
export const getGetBlogsById = (id: number): Action<SchemaBlogsContentItem> => ({
  method: "GET",
  endpoint: `/get/blogs/${id}`
})

/**
 * Lots lists
 */
export const getGetLots = (limit: number, current: number): Action<SchemaLotsLists> => ({
  method: "GET",
  endpoint: `/get/lots`,
  params: { limit, current }
})

/**
 * Lots content item
 */
export const getGetLotsById = (id: number): Action<SchemaLotsContentItem> => ({
  method: "GET",
  endpoint: `/get/lots/${id}`
})

/**
 * Задание пользователем своей ставки
 */
export const postCabinetLotsPlaceBet = (body: SchemaLotsPlaceBet): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/lots/place_bet`,
  body
})

/**
 * Личная страница пользователя
 */
export const getCabinet = (): Action<SchemaUsersCabinet> => ({
  method: "GET",
  endpoint: `/cabinet`
})

/**
 * Список лотов пользователя
 */
export const getCabinetLots = (limit: number, current: number, status: number): Action<SchemaUsersLotsLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots`,
  params: { limit, current, status }
})

/**
 * Удаление лота пользователем
 */
export const deleteCabinetLotsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "DELETE",
  endpoint: `/cabinet/lots/delete/${id}`
})

/**
 * Публикация пользователем лота
 */
export const getCabinetLotsAdd = (id: number): Action<{
  category: SchemaCategoryLists
  data: SchemaLotsGetFormData
}> => ({
  method: "GET",
  endpoint: `/cabinet/lots/add`,
  params: { id }
})

/**
 * Публикация пользователем лота
 */
export const postCabinetLotsAdd = (body: SchemaUsersLotsFormData): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/lots/add`,
  body
})

/**
 * Удаление отзыва пользователем
 */
export const deleteCabinetReviewsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "DELETE",
  endpoint: `/cabinet/reviews/delete/${id}`
})

/**
 * Добавить отзыв
 */
export const postCabinetReviewsAdd = (body: SchemaReviewsAdd): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/reviews/add`,
  body
})

/**
 * Уведомления для пользователя
 */
export const getCabinetNotifications = (): Action<SchemaNotifications> => ({
  method: "GET",
  endpoint: `/cabinet/notifications`
})

/**
 * Пометить уведомление прочитанным после прочтения
 */
export const postCabinetNotificationsRead = (body: {
  id: number
}): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/notifications/read`,
  body
})

/**
 * Вывод списка лотов, которые находятся в избранном пользователя
 */
export const getCabinetFavorite = (): Action<SchemaFavoriteList> => ({
  method: "GET",
  endpoint: `/cabinet/favorite`
})

/**
 * Вывод списка лотов, которые находятся в избранном пользователя
 */
export const getCabinetFavoriteUsers = (): Action<SchemaFavoriteUsers> => ({
  method: "GET",
  endpoint: `/cabinet/favorite/users`
})

/**
 * Добавить Лот в избранное. Если он там уже есть, то лот удаляется.
 */
export const putCabinetFavoriteAdd = (body: SchemaFavorite): Action<SchemaFavoriteAddResponse> => ({
  method: "PUT",
  endpoint: `/cabinet/favorite/add`,
  body
})

/**
 * Получить лайки сущности
 */
export const getCabinetLikes = (entity: string, id: number): Action<SchemaLikesGet> => ({
  method: "GET",
  endpoint: `/cabinet/likes`,
  params: { entity, id }
})

/**
 * Передать/Отозвать лайк
 */
export const postCabinetDislikesAdd = (body: SchemaLikes): Action<SchemaLikesGet> => ({
  method: "POST",
  endpoint: `/cabinet/dislikes/add`,
  body
})

/**
 * Передать/Отозвать лайк
 */
export const postCabinetLikesAdd = (body: SchemaLikes): Action<SchemaLikesGet> => ({
  method: "POST",
  endpoint: `/cabinet/likes/add`,
  body
})

/**
 * Чат сообщений пользователя
 */
export const getCabinetChat = (limit: number, current: number): Action<SchemaChatUsersLists> => ({
  method: "GET",
  endpoint: `/cabinet/chat`,
  params: { limit, current }
})

/**
 * Чат сообщений пользователя
 */
export const getCabinetChatByChatUsers = (chat_users: number, limit: number, current: number): Action<SchemaChatUsers> => ({
  method: "GET",
  endpoint: `/cabinet/chat/${chat_users}`,
  params: { limit, current }
})

/**
 * Сообщение пользователя
 */
export const postCabinetChatByChatUsersAdd = (chat_users: number, body: SchemaChatUsersFormAdd): Action<SchemaChatUsersAdd> => ({
  method: "POST",
  endpoint: `/cabinet/chat/${chat_users}/add`,
  body
})

/**
 * Жалобы
 */
export const getCabinetClaims = (limit: number, current: number): Action<SchemaClaims> => ({
  method: "GET",
  endpoint: `/cabinet/claims`,
  params: { limit, current }
})

/**
 * Открыть жалобу или ответить в открытой жалобе
 */
export const postCabinetClaimsAdd = (body: SchemaClaimsAdd): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/claims/add`,
  body
})

/**
 * Удалить жалобу. Удалить может тот пользователь который открыл жалобу.
 */
export const deleteCabinetClaimsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "DELETE",
  endpoint: `/cabinet/claims/delete/${id}`
})

/**
 * Запрос на смену телефона
 */
export const postUsersPhoneSet = (body: SchemaUsersPhone): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/users/phone_set`,
  body
})

/**
 * Users confirm email
 */
export const getUsersConfirmByConfirmKey = (confirm_key: string): Action<SchemaOk> => ({
  method: "GET",
  endpoint: `/users/confirm/${confirm_key}`
})

/**
 * Users forgot request
 */
export const postUsersForgot = (body: SchemaUsersForgotRequest): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/users/forgot`,
  body
})

/**
 * Users reset password
 */
export const postUsersForgotByConfirmKey = (confirm_key: string, body: SchemaUsersForgotReset): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/users/forgot/${confirm_key}`,
  body
})

/**
 * Users forgot confirm
 */
export const getUsersForgotByConfirmKey = (confirm_key: string): Action<SchemaOk> => ({
  method: "GET",
  endpoint: `/users/forgot/${confirm_key}`
})

/**
 * 
 */
export const getUsersSignupBySocialKey = (social_key: "vk" | "facebook" | "google"): Action<SchemaUsersAuthOk> => ({
  method: "GET",
  endpoint: `/users/signup/${social_key}`
})

/**
 * Users send signup data
 */
export const postUsersSignup = (body: SchemaUsersSignUp): Action<SchemaUsersAuthOk> => ({
  method: "POST",
  endpoint: `/users/signup`,
  body
})

/**
 * Users sign in
 */
export const postUsersSignin = (body: SchemaUsersSignin): Action<SchemaUsersAuthOk> => ({
  method: "POST",
  endpoint: `/users/signin`,
  body
})