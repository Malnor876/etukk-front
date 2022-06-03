import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import { useParams } from "react-router"

import UserProfile from "./UserProfile"

function UserView() {
  const params = useParams<"userId">()
  if (params.userId == null) {
    throw new ReactError(UserView, "got no userId")
  }
  if (isNaN(+params.userId)) {
    throw new ReactError(UserView, "userId is not a number")
  }

  return (
    <UserProfile userId={+params.userId} />
  )
}

export default UserView