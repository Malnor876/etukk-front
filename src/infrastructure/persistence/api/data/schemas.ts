
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

export interface SchemaBlogsLists {
	status: boolean
	msg: string
	result: {
		limit: number
		current: number
		items: SchemaBlogsItem[]
	}
}

export interface SchemaBlogsContentItem {
	status: boolean
	msg: string
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
	result: SchemaLotsItem[]
}

export interface SchemaSearchLists {
	status: boolean
	msg: string
	result: {
		limit: number
		current: number
		items: SchemaLotsItem[]
	}
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
	result: {
		limit: number
		current: number
		items: SchemaLotsItem[]
	}
}

export interface SchemaLotsContentItem {
	status: boolean
	msg: string
	result: {
		name: string
		content: string
		specifications: SchemaLotsSpecifications[] | null
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
	delivery?: "other_regions" | "only_city"
	name: string
	content?: string
	specifications?: {
		key: string
		val: string
	}[]
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
	result: {
		price: number
		city: string
		description: string
	}
}

export interface SchemaDeliveryZone {
	status: boolean
	msg: string
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
	result: {
		users: number
		avatar: string
		unread: boolean
	}[]
}

export interface SchemaChatUsers {
	status: boolean
	msg: string
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
	result: {
		count_likes: number
		count_dislikes: number
	}
}

export interface SchemaLikesGet {
	status: boolean
	msg: string
	result: {
		count_likes: number
		count_dislikes: number
		response_type: "add" | "del"
	}
}

export interface SchemaClaims {
	status: boolean
	msg: string
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

export interface SchemaUsersCabinet {
	status: boolean
	msg: string
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
	pricture: string
	address: string
	rating_buyer: number
	rating_seller: number
}

export interface SchemaUsersLotsLists {
	status: boolean
	msg: string
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
