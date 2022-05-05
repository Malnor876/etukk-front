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
  SchemaFaqLists,
  SchemaFavorite,
  SchemaFavoriteAddResponse,
  SchemaFavoriteList,
  SchemaFavoriteUsers,
  SchemaLikes,
  SchemaLikesGet,
  SchemaLotArchiveLists,
  SchemaLotDisputesLists,
  SchemaLotsBetsLists,
  SchemaLotsConfirmLists,
  SchemaLotsContentItem,
  SchemaLotsEquals,
  SchemaLotsGetFormData,
  SchemaLotsInspectionLists,
  SchemaLotsLists,
  SchemaLotSoldLists,
  SchemaLotsPlaceBet,
  SchemaLotsPublishedLists,
  SchemaLotsRejectedLists,
  SchemaLotsUsersBetsDetail,
  SchemaLotsUsersBetsPeriod,
  SchemaLotsWayLists,
  SchemaLotsWonLists,
  SchemaNewsItemContent,
  SchemaNewsLists,
  SchemaNotifications,
  SchemaOk,
  SchemaPagesMenu,
  SchemaRecommendations,
  SchemaReviewsAdd,
  SchemaReviewSeller,
  SchemaSearchLists,
  SchemaUsersAuthOk,
  SchemaUsersAuthSocial,
  SchemaUsersAvatar,
  SchemaUsersAvatarResp,
  SchemaUsersCabinet,
  SchemaUserSettings,
  SchemaUserSettingsGet,
  SchemaUsersForgotRequest,
  SchemaUsersForgotReset,
  SchemaUsersLotsFormData,
  SchemaUsersLotsLists,
  SchemaUsersLotsStatus,
  SchemaUsersPassword,
  SchemaUsersPhone,
  SchemaUsersPostData,
  SchemaUsersPublicInfo,
  SchemaUsersSignin,
  SchemaUsersSignUp
} from "./schemas"

/**
 * Get content page data
 */
export const getGetPagesIdByPagesId = (pages_id: number): Action<SchemaContent> => ({
  method: "GET",
  endpoint: `/get/pages/id/${pages_id}`
})

/**
 * Get content page data
 */
export const getGetPagesUrlByUrl = (url: string): Action<SchemaContent> => ({
  method: "GET",
  endpoint: `/get/pages/url/${url}`
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
 * @param price - Цена [минимальная, максимальная] 
 * @param category - Категории 
 * @param seller - Тип пользователя [физическое лицо, юридическое лицо] 
 * @param delivery - Доставка во [все, регионы, по городу] 
 * @param period - Дата публикации лотов 
 * @param started - Идентификатор статуса лота [началось,закончился,ожидание] 
 */
export const getGetFilters = (price?: {
  min: number
  max: number
}, category?: number[], seller?: "all" | "user" | "organization", delivery?: "all" | "other_regions" | "only_city", period?: {
  date_start: string
  date_end: string
}, started?: "started" | "ended" | "waiting"): Action<SchemaSearchLists> => ({
  method: "GET",
  endpoint: `/get/filters`,
  params: { price, category, seller, delivery, period, started }
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
export const getGetSearch = (s?: string, limit?: number, current?: number): Action<SchemaSearchLists> => ({
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
export const getGetDeliveryAddress = (users_coordinate?: {
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
export const getGetDeliveryZone = (users_coordinate?: {
  latitude: number
  longitude: number
}, city?: string): Action<SchemaDeliveryZone> => ({
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
export const getGetNews = (limit?: number, current?: number): Action<SchemaNewsLists> => ({
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
 * FAQ список
 */
export const getGetFaq = (limit?: number, current?: number, hashtags?: string[]): Action<SchemaFaqLists> => ({
  method: "GET",
  endpoint: `/get/faq`,
  params: { limit, current, hashtags }
})

/**
 * Blogs lists
 */
export const getGetBlogs = (limit?: number, current?: number): Action<SchemaBlogsLists> => ({
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
 * Данные пользователя
 */
export const getGetUsersById = (id: number): Action<SchemaUsersPublicInfo> => ({
  method: "GET",
  endpoint: `/get/users/${id}`
})

/**
 * Страница отзывов
 */
export const getGetUsersByIdReviews = (id: number, limit?: number, current?: number): Action<SchemaReviewSeller> => ({
  method: "GET",
  endpoint: `/get/users/${id}/reviews`,
  params: { limit, current }
})

/**
 * Список завершённых лотов
 */
export const getGetUsersByIdCompleted = (id: number, limit?: number, current?: number): Action<SchemaLotsLists> => ({
  method: "GET",
  endpoint: `/get/users/${id}/completed`,
  params: { limit, current }
})

/**
 * Список завершённых лотов
 */
export const getGetUsersByIdPlaced = (id: number, limit?: number, current?: number): Action<SchemaLotsLists> => ({
  method: "GET",
  endpoint: `/get/users/${id}/placed`,
  params: { limit, current }
})

/**
 * Похожие лоты
 */
export const getGetLotsEqualById = (id: number): Action<SchemaLotsEquals> => ({
  method: "GET",
  endpoint: `/get/lots/equal/${id}`
})

/**
 * Lots lists
 */
export const getGetLots = (limit?: number, current?: number): Action<SchemaLotsLists> => ({
  method: "GET",
  endpoint: `/get/lots`,
  params: { limit, current }
})

/**
 * Данные лота
 */
export const getGetLotsById = (id: number): Action<SchemaLotsContentItem> => ({
  method: "GET",
  endpoint: `/get/lots/${id}`
})

/**
 * Данные лота | Подробная таблица
 */
export const getGetLotsByIdDetail = (id: number, period?: number): Action<SchemaLotsUsersBetsDetail> => ({
  method: "GET",
  endpoint: `/get/lots/${id}/detail`,
  params: { period }
})

/**
 * Данные лота
 */
export const getGetLotsByIdStats = (id: number, period?: number): Action<SchemaLotsUsersBetsPeriod> => ({
  method: "GET",
  endpoint: `/get/lots/${id}/stats`,
  params: { period }
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
 * Настройки подписок
 */
export const getCabinetUsersSettings = (): Action<SchemaUserSettingsGet> => ({
  method: "GET",
  endpoint: `/cabinet/users/settings`
})

/**
 * Сохранение настроек по подпискам
 */
export const postCabinetUsersSettings = (body: SchemaUserSettings): Action<SchemaUserSettingsGet> => ({
  method: "POST",
  endpoint: `/cabinet/users/settings`,
  body
})

/**
 * Изменить фото пользователя
 */
export const postCabinetUsersPicture = (body: SchemaUsersAvatar): Action<SchemaUsersAvatarResp> => ({
  method: "POST",
  endpoint: `/cabinet/users/picture`,
  body
})

/**
 * Изменить пароль
 */
export const postCabinetUsersPassword = (body: SchemaUsersPassword): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/users/password`,
  body
})

/**
 * Сохранение информации о пользователе
 */
export const postCabinetSave = (body: SchemaUsersPostData): Action<SchemaUsersCabinet> => ({
  method: "POST",
  endpoint: `/cabinet/save`,
  body
})

/**
 * Список лотов пользователя
 */
export const getCabinetLots = (limit?: number, current?: number, status?: number): Action<SchemaUsersLotsLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots`,
  params: { limit, current, status }
})

/**
 * Удаление лота пользователем
 */
export const postCabinetLotsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/lots/delete/${id}`
})

/**
 * Публикация и редактирование лота
 */
export const postCabinetLotsStatus = (body: SchemaUsersLotsStatus): Action => ({
  method: "POST",
  endpoint: `/cabinet/lots/status`,
  body
})

/**
 * Публикация и редактирование лота
 */
export const getCabinetLotsAdd = (id?: number): Action<{
  category: SchemaCategoryLists
  data: SchemaLotsGetFormData
}> => ({
  method: "GET",
  endpoint: `/cabinet/lots/add`,
  params: { id }
})

/**
 * Публикация и редактирование лота
 */
export const postCabinetLotsAdd = (body: SchemaUsersLotsFormData): Action<SchemaOk> => ({
  method: "POST",
  endpoint: `/cabinet/lots/add`,
  body
})

/**
 * На проверке
 */
export const getCabinetLotsPurchasesInspection = (limit?: number, current?: number): Action<SchemaLotsInspectionLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/purchases/inspection`,
  params: { limit, current }
})

/**
 * Опубликовано
 */
export const getCabinetLotsPurchasesPublished = (limit?: number, current?: number): Action<SchemaLotsPublishedLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/purchases/published`,
  params: { limit, current }
})

/**
 * Отклонено
 */
export const getCabinetLotsPurchasesRejected = (limit?: number, current?: number): Action<SchemaLotsRejectedLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/purchases/rejected`,
  params: { limit, current }
})

/**
 * Продано
 */
export const getCabinetLotsPurchasesSold = (limit?: number, current?: number): Action<SchemaLotSoldLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/purchases/sold`,
  params: { limit, current }
})

/**
 * Архив
 */
export const getCabinetLotsPurchasesArchive = (limit?: number, current?: number): Action<SchemaLotArchiveLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/purchases/archive`,
  params: { limit, current }
})

/**
 * Открыто споров
 */
export const getCabinetLotsPurchasesDisputes = (limit?: number, current?: number): Action<SchemaLotDisputesLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/purchases/disputes`,
  params: { limit, current }
})

/**
 * Выиграно
 */
export const getCabinetLotsSalesWon = (limit?: number, current?: number): Action<SchemaLotsWonLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/sales/won`,
  params: { limit, current }
})

/**
 * В пути
 */
export const getCabinetLotsSalesWay = (limit?: number, current?: number): Action<SchemaLotsWayLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/sales/way`,
  params: { limit, current }
})

/**
 * Подтвердить получение
 */
export const getCabinetLotsSalesConfirm = (limit?: number, current?: number): Action<SchemaLotsConfirmLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/sales/confirm`,
  params: { limit, current }
})

/**
 * Открыто споров
 */
export const getCabinetLotsSalesDisputes = (limit?: number, current?: number): Action<SchemaLotDisputesLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/sales/disputes`,
  params: { limit, current }
})

/**
 * Завершение покупки
 */
export const getCabinetLotsSalesCompleting = (limit?: number, current?: number): Action<SchemaLotDisputesLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/sales/completing`,
  params: { limit, current }
})

/**
 * Ставки пользователя
 */
export const getCabinetLotsBets = (limit?: number, current?: number): Action<SchemaLotsBetsLists> => ({
  method: "GET",
  endpoint: `/cabinet/lots/bets`,
  params: { limit, current }
})

/**
 * Удаление отзыва пользователем
 */
export const postCabinetReviewsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "POST",
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
export const postCabinetFavoriteAdd = (body: SchemaFavorite): Action<SchemaFavoriteAddResponse> => ({
  method: "POST",
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
export const getCabinetChat = (limit?: number, current?: number): Action<SchemaChatUsersLists> => ({
  method: "GET",
  endpoint: `/cabinet/chat`,
  params: { limit, current }
})

/**
 * Чат сообщений пользователя
 */
export const getCabinetChatByChatUsers = (chat_users: number, limit?: number, current?: number): Action<SchemaChatUsers> => ({
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
export const getCabinetClaims = (limit?: number, current?: number): Action<SchemaClaims> => ({
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
export const postCabinetClaimsDeleteById = (id: number): Action<SchemaOk> => ({
  method: "POST",
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
 * Авторизация через социальную сеть
 */
export const getUsersSocial = (): Action<SchemaUsersAuthSocial> => ({
  method: "GET",
  endpoint: `/users/social`
})

/**
 * Ok
 */
export const getUsersSignupBySocialKey = (social_key: "vk" | "facebook" | "google" | (string & {})): Action<SchemaUsersAuthOk> => ({
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
