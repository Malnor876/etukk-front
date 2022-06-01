import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import { IMAGE_MOCKS } from "constants/mocks"
import DetailedSellers from "domain/seller/DetailedSellers"
import { Route, Routes } from "react-router"

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
        <Route path="lots" element={<NotificationsLotsContainer />} />
        <Route path="subs" element={<DetailedSellers sellers={[{ id: 0, avatar: IMAGE_MOCKS[0], city: "asd", dislikes: 1, likes: 1, name: "asdasdsd", bookmarked: false, linkedTo: "", lotsCount: 1 }]} />} />
        {/* <Route path="support" element={<DetailedSellers sellers={[]} />} /> */}
      </Routes>
    </>
  )
}

function NotificationsLotsContainer() {
  return null
  // return (
  //   <QueryContainer action={getCabinetNotifications()} mapping={mapCabinetNotifications}>
  //     {payload => (
  //       <DetailedLots lots={Array(16).fill(LOT_PREVIEW_MOCK)} />
  //     )}
  //   </QueryContainer>
  // )
}

export default NotificationsView
