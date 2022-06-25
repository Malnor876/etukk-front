import ButtonLink from "app/components/UI/Button/ButtonLink"
import Switcher from "app/components/UI/Switcher/Switcher"
import ProfilePurchasesContainer from "areas/profile/containers/ProfilePurchasesContainer"
import ProfileReviewsContainer from "areas/profile/containers/ProfileReviewsContainer"
import { Outlet, Route, Routes } from "react-router-dom"

import ProfilePurchasesCheckoutView from "./views/checkout/ProfilePurchasesCheckoutView"
import ProfilePurchasesConfirmDeliveryView from "./views/confirm-delivery/ProfilePurchasesConfirmDeliveryView"

function ProfilePurchasesView() {
  return (
    <Routes>
      <Route element={(
        <>
          <Switcher>
            <ButtonLink to="" end>Статус покупок</ButtonLink>
            <ButtonLink to="reviews">Отзывы</ButtonLink>
          </Switcher>
          <Outlet />
        </>
      )}>
        <Route index element={<ProfilePurchasesContainer />} />
        <Route path="reviews" element={<ProfileReviewsContainer type="purchases" />} />
      </Route>

      <Route path="checkout/:lotId" element={<ProfilePurchasesCheckoutView />} />
      <Route path="confirm-delivery/:lotId" element={<ProfilePurchasesConfirmDeliveryView />} />
    </Routes>
  )
}

export default ProfilePurchasesView