import { IMAGE_MOCKS } from "constants/mocks"
import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"

import { ExtractActionPayload } from "../client.types"
import { getUser } from "../data/actions"
import { mapImageUrl } from "./helpers"

export function mapUser(user: ExtractActionPayload<ReturnType<typeof getUser>>): UserSigned {
  const [firstName, lastName] = user.fullname.split(" ")
  return {
    auth: true,
    id: user.id,
    avatar: mapImageUrl(user.user_pic?.filename),
    city: user.city ?? "unknown",
    fullName: user.fullname,
    firstName,
    lastName,
    type: user.organization ? "organization" : "user",
    verified: user.verified ?? false,
    buyerRating: user.seller_rating ?? -1,
    sellerRating: user.seller_rating ?? -1,
    email: user.email ?? "unknown",
    phone: user.phonenumber ?? "unknown"
  }
}

export function mapUserType(userType: "organization" | "user") {
  switch (userType) {
    case "user": return "Физическое Лицо"
    case "organization": return "Юридическое Лицо"

    default:
      return "Неизвестное"
  }
}