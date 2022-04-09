export type User = UserSigned | UserAnonymous

export interface UserSigned {
  auth: true
  id: number
  type: UserType
  fullName: string
  firstName: string
  lastName: string
  avatar: string
  city: string

  buyerRating: number
  sellerRating: number
}

export interface UserAnonymous {
  auth: false
}

export type UserType = "organization" | "user"
