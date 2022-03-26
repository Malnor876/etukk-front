import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import Container from "app/layouts/Container/Container"
import { IMAGE_MOCKS } from "constants/mocks"
import SellerPreview from "domain/seller/SellerPreview/SellerPreview"
import { Route, Routes } from "react-router"

import DetailedSellers from "./DetailedSellers/DetailedSellers"

const sellers = Array(16).fill({
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
        <ButtonLink small outline nav to="test">test</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="lots/*" element={<DetailedSellers sellers={sellers} />} />
        <Route path="subs/*" element={<DetailedSellers sellers={sellers} />} />
        <Route path="support/*" element={<DetailedSellers sellers={sellers} />} />
        <Route path="test" element={
          <>
            <Container>
              <SellerPreview
                avatar={IMAGE_MOCKS[0]}
                name="ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом"
                city="Москва"
                likes={5}
                dislikes={1}
              />
              <SellerPreview
                avatar={IMAGE_MOCKS[0]}
                name="ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом"
                city="Москва"
                likes={5}
                dislikes={1}
              />
            </Container>
          </>
        } />
      </Routes>
    </>
  )
}

export default NotificationsView
