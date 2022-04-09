import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import Container from "app/layouts/Container/Container"
import { IMAGE_MOCKS, LOT_PREVIEW_MOCK } from "constants/mocks"
import DetailedLots from "domain/Lot/DetailedLots"
import SellerPreview from "domain/seller/SellerPreview/SellerPreview"
import { Route, Routes } from "react-router"

import DetailedSellers from "../../../domain/seller/DetailedSellers"

const sellers = Array(16).fill({
  id: 1,
  avatar: IMAGE_MOCKS[0],
  name: "ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом",
  city: "Москва",
  likes: 5,
  dislikes: 1
})

function NotificationsView() {
  return (
    <>
      <h2 className="heading">Уведомления</h2>
      <Buttons>
        <ButtonLink small outline nav to="lots">По лотам</ButtonLink>
        <ButtonLink small outline nav to="subs">Мои подписки</ButtonLink>
        <ButtonLink small outline nav to="support">Тех. поддержка</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="lots" element={<DetailedLots lots={Array(16).fill(LOT_PREVIEW_MOCK)} />} />
        <Route path="subs" element={<DetailedSellers sellers={sellers} />} />
        <Route path="support" element={<DetailedSellers sellers={sellers} />} />
      </Routes>
    </>
  )
}

export default NotificationsView
