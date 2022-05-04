
export interface SchemaOk {
  status: boolean
  msg: string
  uid: string
}

export interface SchemaError {
  status: boolean
  msg: string
  uid: string
}

export interface SchemaNotFoud {
  status: boolean
  msg: string
  uid: string
}

export interface SchemaContent {
  status: boolean
  msg: string
  uid: string
  result: {
  title: string
  description: string
  keywords: string
  content: string
  modules: {
  news: SchemaNewsItem[]
  blogs: SchemaBlogsItem[]
}
}
}

export interface SchemaPagesMenu {
  status: boolean
  msg: string
  uid: string
  result: SchemaPagesMenuItem[]
}

export interface SchemaPagesMenuItem {
  id: number
  parent: number
  level: number
  name: string
}

export interface SchemaCategoryLists {
  status: boolean
  msg: string
  uid: string
  result: {
  category: SchemaCategoryListsItem[]
  cities: SchemaCities[]
  price: {
  min: number
  max: number
}
}
}

export interface SchemaCities {
  city: string
}

export interface SchemaCategoryListsItem {
  id: number
  parent: number
  level: number
  name: string
}

export interface SchemaNewsLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaNewsItem[]
}
}

export interface SchemaNewsItemContent {
  id: number
  name: string
  content: string
  picture: string
  date_create: string
}

export interface SchemaNewsItem {
  id: number
  name: string
  anons: string
  picture: string
  date_create: string
}

export interface SchemaFaqLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  hashtags: string[]
  items: {
  id: number
  path: string
  title: string
  content: string
}[]
}
}

export interface SchemaBlogsLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaBlogsItem[]
}
}

export interface SchemaBlogsContentItem {
  status: boolean
  msg: string
  uid: string
  result: {
  name: string
  content: string
  picture: string[]
  date_create: string
  users: SchemaUsersInfo
}
}

export interface SchemaBlogsItem {
  id: number
  name: string
  picture: string
  date_create: string
  users: SchemaUsersInfo
}

export interface SchemaRecommendations {
  status: boolean
  msg: string
  uid: string
  result: SchemaLotsItem[]
}

export interface SchemaSearchLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaLotsItem[]
}
}

export interface SchemaFavorite {
  type: "lots" | "users"
  item: number
}

export interface SchemaFavoriteAddResponse {
  status: boolean
  msg: string
  uid: string
  result: "add" | "delete"
}

export interface SchemaFavoriteUsers {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string | null
}[]
}

export interface SchemaFavoriteList {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: {
  id: number
  name: string
  picture: string
  city: string
  price: number
  delivery: "other_regions" | "only_city"
  trading_start: string
}[]
}
}

export interface SchemaLikes {
  entity: string
  id: number
}

export interface SchemaLotsInspectionLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  trading_end: string
  price: number
  users: SchemaUsersShortData
}[]
}

export interface SchemaLotsPublishedLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  trading_end: string
  count: number
  price_bet: number
  price: number
}[]
}

export interface SchemaLotsRejectedLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  banned_msg: string
}[]
}

export interface SchemaLotSoldLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  price: number
  city: string
  date_acceptance: string
  users: SchemaUsersShortData
}[]
}

export interface SchemaLotArchiveLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  banned: boolean
  sold: boolean
}[]
}

export interface SchemaLotDisputesLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  price: number
  city: string
  claims_open: string
  users: SchemaUsersShortData
}[]
}

export interface SchemaLotsWayLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  price: number
  city: string
  users: SchemaUsersShortData
}[]
}

export interface SchemaLotsConfirmLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  price: number
  city: string
  delivery_time: string
  users: SchemaUsersShortData
}[]
}

export interface SchemaLotsGetFormData {
  id: number
  category: number
  name: string
  content: string
  specifications: SchemaLotsSpecifications[]
  picture: string[]
  video: string
  city: string
  price: number
  price_bids: SchemaLotsUsersBets[]
  trading_start: string
  trading_end: string
  redeemed: boolean
  active: boolean
  banned: boolean
}

export interface SchemaLotsSpecifications {
  key: string
  val: string
}

export interface SchemaLotsUsersBetsDetail {
  status: boolean
  msg: string
  uid: string
  result: {
  bets: {
  bet: number
  date: string
  user: string
}[]
  total_bets: number
  current_bid: number
}
}

export interface SchemaLotsUsersBetsPeriod {
  status: boolean
  msg: string
  uid: string
  result: {
  bets: SchemaLotsUsersBets[]
  favorites: number
  views: number
}
}

export interface SchemaLotsUsersBets {
  uid: number
  users: string
  bet: number
  date: string
}

export interface SchemaLotsPlaceBet {
  lots: number
  bet: number
}

export interface SchemaReviewSeller {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaReviewSellerItem[]
}
}

export interface SchemaReviewSellerItem {
  id: number
  lots: number
  votes: number
  content: string
  picture: string
  user: string
}

export interface SchemaLotsWonLists {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  picture: string
  price: number
  users: SchemaUsersShortData
  date: string
}[]
}

export interface SchemaLotsBetsLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaLotsBetItem[]
}
}

export interface SchemaLotsEquals {
  status: boolean
  msg: string
  uid: string
  result: SchemaLotsItem[]
}

export interface SchemaLotsLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaLotsItem[]
}
}

export interface SchemaLotsContentItem {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  name: string
  content: string
  specifications: SchemaLotsSpecifications[] | null
  picture: string[]
  video: string | null
  city: string
  delivery: "other_regions" | "only_city"
  trading_start: string
  trading_end: string
  started: "started" | "ended" | "waiting" | "archive"
  redeemed: boolean
  price: number
  price_step: number
  price_bids: SchemaLotsUsersBets[] | null
  binds_number: number
  bind_current: number | null
  favorite: number
  users_info: {
  id: number
  name: string
  type: "organization" | "user"
  reviews: {
  likes: number
  dislikes: number
}
  rating: number
}
}
}

export interface SchemaLotsItem {
  id: number
  name: string
  price: number
  picture: string | null
  city: string
  delivery: "other_regions" | "only_city"
  trading_start: string
  favorite: number
}

export interface SchemaLotsBetItem {
  id: number
  name: string
  price: number
  price_bet: number
  picture: string
  city: string
  delivery: "other_regions" | "only_city"
  trading_end: string
}

export interface SchemaReviewsAdd {
  answer: number
  orders: number
  lots: number
  votes: number
  content: string
  picture: string[]
  date_create: string
}

export interface SchemaAdvertising {
  uid: string
  name: string
  media: string
}

export interface SchemaAdvertisingFollowLink {
  status: boolean
  msg: string
}

export interface SchemaUsersLotsStatus {
  status: "started" | "ended" | "waiting" | "archive"
}

export interface SchemaUsersLotsFormData {
  id?: number
  category: number
  delivery?: "other_regions" | "only_city"
  name: string
  content?: string
  specifications?: {
  key: string
  val: string
}[] | null
  picture: string[]
  video?: string
  city: string
  price: number
  trading_start: string
  trading_end: string
}

export interface SchemaNotifications {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  type: string
  message: string
  date_create: string
}[]
}

export interface SchemaDeliveryPrice {
  status: boolean
  msg: string
  uid: string
  result: {
  price: number
  city: string
  description: string
}
}

export interface SchemaDeliveryZone {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  city: string
  price: number
  description: string
  zone: string
  color: string
}[]
}

export interface SchemaChatUsersLists {
  status: boolean
  msg: string
  uid: string
  result: {
  users: number
  avatar: string
  unread: boolean
}[]
}

export interface SchemaChatUsers {
  status: boolean
  msg: string
  uid: string
  result: SchemaChatItem[]
}

export interface SchemaChatItem {
  id: number
  reply: number
  users_to: {
  id: number
  name: string
  avatar: string
}
  users_from: {
  id: number
  name: string
  avatar: string
}
  message: string
  date_create: string
  read: boolean
}

export interface SchemaChatUsersAdd {
  status: boolean
  msg: string
  uid: string
  result: SchemaChatItem
}

export interface SchemaChatUsersFormAdd {
  reply: number
  user: number
  message: string
}

export interface SchemaLikesGet {
  status: boolean
  msg: string
  uid: string
  result: {
  count_likes: number
  count_dislikes: number
  response_type: "add" | "del"
}
}

export interface SchemaClaims {
  status: boolean
  msg: string
  uid: string
  result: {
  total_items: number
  limit: number
  items: SchemaClaimsItem[]
}
}

export interface SchemaClaimsItem {
  lots: SchemaLotsItem
  seller: SchemaUsersInfo
  buyer: SchemaUsersInfo
  claims: {
  id: number
  seller: number
  buyer: number
  manager: number
  name: string
  content: string
  picture: string[]
  date_create: string
}[]
}

export interface SchemaClaimsAdd {
  lots: number
  seller: number
  buyer: number
  name: string
  content: string
  picture: string[]
}

export interface SchemaUserSettingsGet {
  status: boolean
  msg: string
  uid: string
  result: SchemaUserSettings
}

export interface SchemaUserSettings {
  increase: boolean
  subscriptions: boolean
  bidding: boolean
}

export interface SchemaUsersAvatarResp {
  status: boolean
  msg: string
  uid: string
  result: string
}

export interface SchemaUsersShortData {
  id: number
  name: string
  picture: string | null
}

export interface SchemaUsersAvatar {
  picture: string
}

export interface SchemaUsersPassword {
  password_old: string
  password: string
  password_confirm: string
}

export interface SchemaUsersPostData {
  id: number
  type: "user" | "organization"
  name: string
  email: string
  phone: string
  inn: string | null
}

export interface SchemaUsersPublicInfo {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  type: "user" | "organization"
  name: string
  picture: string
  rating_buyer: number
  rating_seller: number
}
}

export interface SchemaUsersCabinet {
  status: boolean
  msg: string
  uid: string
  result: {
  id: number
  type: "user" | "organization"
  name: string
  picture: string
  email: string
  phone: string
  inn: number
  rating_buyer: number
  rating_seller: number
  analytics: {
  amount_sales: number
  amount_purchase: number
}
}
}

export interface SchemaUsersInfo {
  id: number
  name: string
  type: "organization" | "user"
  picture: string
  rating_buyer: number
  rating_seller: number
  confirm: boolean
}

export interface SchemaUsersLotsLists {
  status: boolean
  msg: string
  uid: string
  result: {
  limit: number
  current: number
  items: SchemaUsersLotsItem[]
}
}

export interface SchemaUsersLotsItem {
  id: number
  status: number
  status_msg: string
  name: string
  price: number
  price_step: number
  price_bids: {
  users: SchemaUsersInfo
  bet: number
  date: string
}
  trading_start: string
  trading_end: string
  picture: string
  city: string
  started: string
  active: boolean
  banned: boolean
  banned_msg: string
}

export interface SchemaUsersAuthSocial {
  status: boolean
  msg: string
  uid: string
  result: object
}

export interface SchemaUsersAuthOk {
  status: boolean
  msg: string
  uid: string
  result: SchemaUsersInfo
}

export interface SchemaUsersForgotRequest {
  email: string
}

export interface SchemaUsersForgotReset {
  password: string
  password_confirm: string
}

export interface SchemaUsersPhone {
  id: number
  phone: string
}

export interface SchemaUsersSignin {
  email: string
  password: string
}

export interface SchemaUsersSignUp {
  email: string
  password: string
  password_confirm: string
  phone?: string
  inn?: string
  name: string
}
