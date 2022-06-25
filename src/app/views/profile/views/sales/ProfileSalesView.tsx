import ButtonLink from "app/components/UI/Button/ButtonLink"
import Switcher from "app/components/UI/Switcher/Switcher"
import ProfileReviewsContainer from "areas/profile/containers/ProfileReviewsContainer"
import ProfileSalesContainer from "areas/profile/containers/ProfileSalesContainer"
import { Route, Routes } from "react-router-dom"

function ProfileSalesView() {
  return (
    <>
      <Switcher>
        <ButtonLink to="" end>Статус продаж</ButtonLink>
        <ButtonLink to="reviews">Отзывы</ButtonLink>
      </Switcher>
      <Routes>
        <Route index element={<ProfileSalesContainer />} />
        <Route path="reviews" element={<ProfileReviewsContainer type="sales" />} />
      </Routes>
    </>
  )
}

export default ProfileSalesView