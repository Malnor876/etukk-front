
export interface SchemaOk {
	status: boolean
	msg: string
}

export interface SchemaError {
	status: boolean
	msg: string
}

export interface SchemaNotFoud {
	status: boolean
	msg: string
}

export interface SchemaContent {
	status: boolean
	msg: string
	result: SchemaContentResult
}

export interface SchemaPagesMenu {
	status: boolean
	msg: string
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
	result: SchemaCategoryListsItem[]
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
	result: SchemaNewsListsResult
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

export interface SchemaBlogsLists {
	status: boolean
	msg: string
	result: SchemaBlogsListsResult
}

export interface SchemaBlogsContentItem {
	status: boolean
	msg: string
	result: SchemaBlogsContentItemResult
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
	result: SchemaLotsItem[]
}

export interface SchemaSearchLists {
	status: boolean
	msg: string
	result: SchemaSearchListsResult
}

export interface SchemaLotsGetFormData {
	id: number
	category: number
	name: string
	content: string
	specifications: SchemaLotsSpecifications[]
	picture: string[]
	video: string
	address: string
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

export interface SchemaLotsUsersBets {
	users: string
	bet: number
	date: string
}

export interface SchemaLotsPlaceBet {
	lots: number
	bet: number
}

export interface SchemaLotsLists {
	status: boolean
	msg: string
	result: SchemaSearchListsResult
}

export interface SchemaLotsContentItem {
	status: boolean
	msg: string
	result: SchemaLotsContentItemResult
}

export interface SchemaLotsItem {
	id: number
	name: string
	price: number
	picture: string
	address: string
	started: string
	users: SchemaUsersInfo
}

export interface SchemaReviewsAdd {
	answer: number
	orders: number
	entity: string
	entity_id: number
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

export interface SchemaUsersLotsFormData {
	id?: number
	category: number
	delivery?: string
	name: string
	content?: string
	specifications?: SchemaUsersLotsFormDataSpecifications[]
	picture: string[]
	video?: string
	address: string
	price: number
	trading_start: string
	trading_end: string
}

export interface SchemaNotifications {
	status: boolean
	msg: string
	result: SchemaNotificationsResult[]
}

export interface SchemaDeliveryPrice {
	status: boolean
	msg: string
	result: SchemaDeliveryPriceResult
}

export interface SchemaDeliveryZone {
	status: boolean
	msg: string
	result: SchemaDeliveryZoneResult[]
}

export interface SchemaChatUsersLists {
	status: boolean
	msg: string
	result: SchemaChatUsersListsResult[]
}

export interface SchemaChatUsers {
	status: boolean
	msg: string
	result: SchemaChatItem[]
}

export interface SchemaChatItem {
	id: number
	reply: number
	users_to: SchemaChatItemUsersTo
	users_from: SchemaChatItemUsersTo
	message: string
	date_create: string
	read: boolean
}

export interface SchemaChatUsersAdd {
	status: boolean
	msg: string
	result: SchemaChatItem
}

export interface SchemaChatUsersFormAdd {
	reply: number
	user: number
	message: string
}

export interface SchemaLikesInit {
	status: boolean
	msg: string
	result: SchemaLikesInitResult
}

export interface SchemaLikesGet {
	status: boolean
	msg: string
	result: SchemaLikesGetResult
}

export interface SchemaClaims {
	status: boolean
	msg: string
	result: SchemaClaimsResult
}

export interface SchemaClaimsItem {
	lots: SchemaLotsItem
	seller: SchemaUsersInfo
	buyer: SchemaUsersInfo
	claims: SchemaClaimsItemClaims[]
}

export interface SchemaClaimsAdd {
	lots: number
	seller: number
	buyer: number
	name: string
	content: string
	picture: string[]
}

export interface SchemaUsersCabinet {
	status: boolean
	msg: string
	result: SchemaUsersCabinetResult
}

export interface SchemaUsersInfo {
	id: number
	name: string
	pricture: string
	address: string
	rating_buyer: number
	rating_seller: number
}

export interface SchemaUsersLotsLists {
	status: boolean
	msg: string
	result: SchemaUsersLotsListsResult
}

export interface SchemaUsersLotsItem {
	id: number
	status: number
	status_msg: string
	name: string
	price: number
	price_step: number
	price_bids: SchemaUsersLotsItemPriceBids
	trading_start: string
	trading_end: string
	picture: string
	address: string
	started: string
	active: boolean
	banned: boolean
	banned_msg: string
}

export interface SchemaUsersAuthOk {
	status: boolean
	msg: string
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

export type SchemaPrice = SchemaPrice[]

export type SchemaPeriod = SchemaPeriod[]

export interface SchemaUsersCoordinate {
	latitude: number
	longitude: number
}

export interface SchemaUsersCoordinate1 {
	latitude: number
	longitude: number
}

export interface SchemaInlineResponse200 {
	category: SchemaCategoryLists
	data: SchemaLotsGetFormData
}

export interface SchemaNotificationsReadBody {
	id: number
}

export interface SchemaContentResultModules {
	news: SchemaNewsItem[]
	blogs: SchemaBlogsItem[]
}

export interface SchemaContentResult {
	title: string
	description: string
	keywords: string
	content: string
	modules: SchemaContentResultModules
}

export interface SchemaNewsListsResult {
	limit: number
	current: number
	items: SchemaNewsItem[]
}

export interface SchemaBlogsListsResult {
	limit: number
	current: number
	items: SchemaBlogsItem[]
}

export interface SchemaBlogsContentItemResult {
	name: string
	content: string
	picture: string[]
	date_create: string
	users: SchemaUsersInfo
}

export interface SchemaSearchListsResult {
	limit: number
	current: number
	items: SchemaLotsItem[]
}

export interface SchemaLotsContentItemResult {
	name: string
	content: string
	specifications: SchemaLotsSpecifications[]
	picture: string[]
	video: string
	address: string
	trading_start: string
	trading_end: string
	started: string
	redeemed: boolean
	price: number
	price_step: number
	price_bids: SchemaLotsUsersBets[]
	binds_number: number
	bind_current: number
}

export interface SchemaUsersLotsFormDataSpecifications {
	key: string
	val: string
}

export interface SchemaNotificationsResult {
	id: number
	type: string
	message: string
	date_create: string
}

export interface SchemaDeliveryPriceResult {
	price: number
	city: string
	description: string
}

export interface SchemaDeliveryZoneResult {
	id: number
	city: string
	price: number
	description: string
	zone: string
	color: string
}

export interface SchemaChatUsersListsResult {
	users: number
	avatar: string
	unread: boolean
}

export interface SchemaChatItemUsersTo {
	id: number
	name: string
	avatar: string
}

export interface SchemaLikesInitResult {
	count_likes: number
	count_dislikes: number
}

export interface SchemaLikesGetResult {
	count_likes: number
	count_dislikes: number
	response_type: string
}

export interface SchemaClaimsResult {
	total_items: number
	limit: number
	items: SchemaClaimsItem[]
}

export interface SchemaClaimsItemClaims {
	id: number
	seller: number
	buyer: number
	manager: number
	name: string
	content: string
	picture: string[]
	date_create: string
}

export interface SchemaUsersCabinetResultAnalytics {
	amount_sales: number
	amount_purchase: number
}

export interface SchemaUsersCabinetResult {
	id: number
	type: string
	name: string
	picture: string
	email: string
	phone: string
	inn: number
	rating_buyer: number
	rating_seller: number
	analytics: SchemaUsersCabinetResultAnalytics
}

export interface SchemaUsersLotsListsResult {
	limit: number
	current: number
	items: SchemaUsersLotsItem[]
}

export interface SchemaUsersLotsItemPriceBids {
	users: SchemaUsersInfo
	bet: number
	date: string
}
