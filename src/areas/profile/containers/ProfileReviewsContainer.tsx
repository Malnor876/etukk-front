import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Review from "app/components/UI/Review/Review"
import Reviews from "app/layouts/Reviews/Reviews"
import { getUserReview } from "infrastructure/persistence/api/data/actions"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { useSelector } from "react-redux"

interface ProfileReviewsContainerProps {
  type: "sales" | "purchases"
}

function ProfileReviewsContainer(props: ProfileReviewsContainerProps) {
  const user = useSelector(state => state.user)
  if (!user.auth) return null

  const action = getUserReview<{
    user_id?: number
    to_user_id?: number
  }>(props.type === "sales" ? ({ user_id: user.id }) : ({ to_user_id: user.id }))

  return (
    <QueryContainer action={action}>
      {payload => (
        <Reviews>
          {payload.map(review => (
            <Review
              user={mapUser(review.user)}
              attachments={[]}
              comment={review.text ?? "..."}
              date={new Date(review.created_at)}
              product={"product"}
              key={review.id} />
          ))}
        </Reviews>
      )}
    </QueryContainer>
  )
}

export default ProfileReviewsContainer
