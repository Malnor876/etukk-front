import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"


export function mapUser(user: any): UserSigned {
  const [firstName, lastName] = user.name.split(" ")
  return {
    auth: true,
    id: user.id,
    avatar: user.picture,
    city: "Москва",
    fullName: user.name,
    firstName,
    lastName,
    type: user.type,
    confirm: user.confirm,
    buyerRating: user.rating_buyer,
    sellerRating: user.rating_seller,
    email: user.email,
    phone: user.phone,
  }
}

export function mapUserType(userType: any) {
  switch (userType) {
    case "user": return "Физическое Лицо"
    case "organization": return "Юридическое Лицо"

    default:
      return "Неизвестное"
  }
}