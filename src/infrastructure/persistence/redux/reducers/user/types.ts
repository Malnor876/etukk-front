export type User = UserSigned | UserAnonymous

export interface UserSigned {
  auth: true
  id: number
  type: UserType
  firstName: string
  lastName: string
  avatar: string
  city: string
}

export interface UserAnonymous {
  auth: false
}

export enum UserType {
  banned, default, admin
}
