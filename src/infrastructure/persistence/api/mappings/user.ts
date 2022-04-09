import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"

import { SchemaUsersInfo } from "../data/schemas"

export function mapUser(user: SchemaUsersInfo): UserSigned {
  const [firstName, lastName] = user.name.split(" ")
  return {
    auth: true,
    id: user.id,
    avatar: user.pricture,
    city: "Москва",
    fullName: user.name,
    firstName,
    lastName,
    type: user.type,
    buyerRating: user.rating_buyer,
    sellerRating: user.rating_seller,
  }
}

export function mapUserType(userType: SchemaUsersInfo["type"]) {
  switch (userType) {
    case "user": return "Физическое Лицо"
    case "organization": return "Юридическое Лицо"

    default:
      return "Неизвестное"
  }
}