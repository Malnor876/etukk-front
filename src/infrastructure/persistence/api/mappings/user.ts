import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"

import { SchemaUsersInfo } from "../data/schemas"

export function mapUser(user: SchemaUsersInfo): UserSigned {
  const [firstName, lastName] = user.name.split(" ")
  return {
    auth: true,
    id: user.id,
    avatar: user.pricture,
    city: user.address,
    fullName: user.name,
    firstName,
    lastName,
    // type: ""
  }
}