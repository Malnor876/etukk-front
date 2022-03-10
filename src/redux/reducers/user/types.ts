export type User = UserSigned | UserAnonymous

export interface UserSigned {
  auth: true
  type: UserType
  firstName: string
  lastName: string
  avatar: string
}

export interface UserAnonymous {
  auth: false
}

export enum UserType {
  banned, default, admin
}
