import "./ProfileView.scss"

import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import { Navigate, Route, Routes } from "react-router"

import ProfileBidsView from "./views/Bids/ProfileBidsView"
import ProfilePersonalView from "./views/Personal/ProfilePersonalView"
import ProfileSalesView, { ProfilePurchasesView } from "./views/Sales/ProfileSalesView"

function ProfileView() {
  return (
    <div className="profile-view">
      <div className="profile-view__container">
        <h2 className="heading">Личный профиль</h2>
        <Buttons>
          <ButtonLink small outline nav to="personal">Личная информация</ButtonLink>
          <ButtonLink small outline nav to="bids">Ставки</ButtonLink>
          <ButtonLink small outline nav to="sales">Продажи</ButtonLink>
          <ButtonLink small outline nav to="purchases">Покупки</ButtonLink>
        </Buttons>
        <Routes>
          <Route path="" element={<Navigate replace to="personal" />} />
          <Route path="personal/*" element={<ProfilePersonalView />} />
          <Route path="bids/*" element={<ProfileBidsView />} />
          <Route path="sales/*" element={<ProfileSalesView />} />
          <Route path="purchases/*" element={<ProfilePurchasesView />} />
        </Routes>
      </div>
    </div>
  )
}

export default ProfileView
