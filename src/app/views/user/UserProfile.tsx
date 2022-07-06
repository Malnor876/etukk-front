import "./UserProfile.scss"

import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import Copy from "app/components/UI/Copy/Copy"
import CustomerRating from "app/components/UI/CustomerRating/CustomerRating"
import Review from "app/components/UI/Review/Review"
import Switcher from "app/components/UI/Switcher/Switcher"
import Previews from "app/layouts/Previews/Previews"
import Reviews from "app/layouts/Reviews/Reviews"
import LotPreview from "areas/lot/LotPreview/LotPreview"
import { IMAGE_MOCKS } from "constants/mocks"
import { isValidResponse } from "infrastructure/persistence/api/client"
import { ExtractActionPayload } from "infrastructure/persistence/api/client.types"
import { getLot, getLotReview, getUserByUserId, postUserFavoriteUser } from "infrastructure/persistence/api/data/actions"
import { mapImageUrl } from "infrastructure/persistence/api/mappings/helpers"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { FilteringField } from "interfaces/Nodejs"
import { useState } from "react"
import { useClient } from "react-fetching-library"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"
import { humanizeDate } from "utils/date"

interface UserProfileProps {
  userId: number
}

function UserProfile(props: UserProfileProps) {
  const getUserReviewsAction = getLotReview<
    FilteringField<"user_id", "iexact", number>
  >({
    user_id__iexact: props.userId
  })

  const getUserLotsAction = (endTime?: Date) => getLot<
    | FilteringField<"user_id", "iexact", number>
    | FilteringField<"bidding_end_time", "gte", string>
  >(10, 0, {
    user_id__iexact: props.userId,
    bidding_end_time__gte: endTime?.toISOString()
  })

  const getUserLotsAllAction = getUserLotsAction()
  const getUserLotsCompletedAction = getUserLotsAction(new Date) // Now

  return (
    <div className="user-profile">
      <div className="user-profile__container">
        <QueryContainer action={getUserByUserId(props.userId)}>
          {user => (
            <UserProfileInfo user={user} />
          )}
        </QueryContainer>
        <Switcher>
          <NavLink to="" end>Отзывы</NavLink>
          <NavLink to="placed">Размещенные лоты</NavLink>
          <NavLink to="completed">Завершенные лоты</NavLink>
        </Switcher>
        <Routes>
          <Route index element={(
            <QueryContainer action={getUserReviewsAction} key="reviews">
              {payload => (
                <Reviews>
                  {payload.map(review => (
                    <Review date={new Date(review.created_at)} product={"none"} attachments={IMAGE_MOCKS} comment={review.text ?? "unknown"} user={{ id: review.user_id, avatar: IMAGE_MOCKS[1], firstName: "Сергей" }} key={review.id} />
                  ))}
                </Reviews>
              )}
            </QueryContainer>
          )} />
          <Route path="placed" element={
            <QueryContainer action={getUserLotsAllAction} mapping={mapLotsLists} key="all lots">
              {payload => (
                <Previews>
                  {payload.items.map(lot => (
                    <LotPreview {...lot} key={lot.id} />
                  ))}
                </Previews>
              )}
            </QueryContainer>
          } />
          <Route path="completed" element={
            <QueryContainer action={getUserLotsCompletedAction} mapping={mapLotsLists} key="completed lots">
              {payload => (
                <Previews>
                  {payload.items.map(lot => (
                    <LotPreview {...lot} key={lot.id} />
                  ))}
                </Previews>
              )}
            </QueryContainer>
          } />
        </Routes>
      </div>
      <div className="user-profile__container">
        <Backward>НАЗАД</Backward>
        <div className="user-profile__cover" />
      </div>
    </div>
  )
}


interface UserProfileInfoProps {
  user: ExtractActionPayload<ReturnType<typeof getUserByUserId>>
}

function UserProfileInfo(props: UserProfileInfoProps) {
  const [subscribed, setSubscribed] = useState(false)
  const client = useClient()

  async function subscribe() {
    setSubscribed(!subscribed)

    const response = await client.query(postUserFavoriteUser({ fav_user_id: props.user.id }))
    if (!isValidResponse(response)) {
      // Fall back if invalid response
      setSubscribed(subscribed)
      return
    }
  }
  return (
    <>
      <div className="user-profile__row">
        <h2 className="heading">{props.user.fullname}</h2>
        <Copy value={"id" + props.user.id} />
      </div>
      <div className="user-profile__row">
        <div className="user-profile__entry">Зарегистрирован {humanizeDate(new Date(props.user.created_at))}</div>
        <div className="user-profile__entry">{props.user.organization ? "Организация" : "Частное лицо"} / г. {props.user.city}</div>
      </div>
      <div className="user-profile__general-info">
        <img src={mapImageUrl(props.user.user_pic?.filename)} alt="avatar" className="user-profile__avatar" />
        <div className="user-profile__info">
          <CustomerRating sellerRating={props.user.seller_rating ?? -1} buyerRating={props.user.seller_rating ?? -1} />
          <div>
            <Button color={subscribed ? "gray" : undefined} await onClick={subscribe}>Подписаться</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
