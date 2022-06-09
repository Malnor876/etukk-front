import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import { IMAGE_MOCKS, LOT_PREVIEW_MOCK } from "constants/mocks"
import DetailedLots from "domain/Lot/DetailedLots"
import LotNotification from "domain/Lot/LotNotification"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotPreviewType } from "domain/Lot/types"
import DetailedSellers from "domain/seller/DetailedSellers"
import { getUserNotifications } from "infrastructure/persistence/api/data/actions"
import { mapLotPreview } from "infrastructure/persistence/api/mappings/lots"
import { useState } from "react"
import { Helmet } from "react-helmet"
import { Route, Routes } from "react-router"

function NotificationsView() {
  return (
    <>
      <Helmet>
        <title>Уведомления | etukk.ru</title>
      </Helmet>
      <h2 className="heading">Уведомления</h2>
      <Buttons>
        <ButtonLink small outline nav to="lots">По лотам</ButtonLink>
        <ButtonLink small outline nav to="subs">Мои подписки</ButtonLink>
        {/* <ButtonLink small outline nav to="support">Тех. поддержка</ButtonLink> */}
      </Buttons>
      <Routes>
        <Route path="lots" element={<NotificationsLotsContainer />} />
        <Route path="subs" element={<DetailedSellers sellers={[{ id: -1, avatar: IMAGE_MOCKS[0], city: "asd", dislikes: -1, likes: -1, fullName: "asdasdsd", bookmarked: false, linkedTo: "", lotsCount: -1 }]} />} />
        {/* <Route path="support" element={<DetailedSellers sellers={[]} />} /> */}
      </Routes>
    </>
  )
}

function NotificationsLotsContainer() {
  const [chosenNotification, setChosenNotification] = useState<{ id: number; lot: LotPreviewType } | null>(null)

  if (chosenNotification !== null) {
    return (
      <LotNotification {...chosenNotification} />
    )
  }

  return (
    <QueryContainer action={getUserNotifications()}>
      {payload => (
        <Previews>
          {payload.filter(item => item.lot != null).map(notification => (
            <button type="button" key={notification.lot.id}>
              <LotPreview {...mapLotPreview(notification.lot)} onClick={() => setChosenNotification({ id: notification.id, lot: mapLotPreview(notification.lot) })} />
            </button>
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function NotificationsUsersContainer() {
  const [chosenNotification, setChosenNotification] = useState<{ id: number; lot: LotPreviewType } | null>(null)

  if (chosenNotification !== null) {
    return (
      <LotNotification {...chosenNotification} />
    )
  }

  return (
    <QueryContainer action={getUserNotifications()}>
      {payload => (
        <Previews>
          {payload.filter(item => item.lot != null).map(notification => (
            <button type="button" key={notification.lot.id}>
              <LotPreview {...mapLotPreview(notification.lot)} onClick={() => setChosenNotification({ id: notification.id, lot: mapLotPreview(notification.lot) })} />
            </button>
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

export default NotificationsView
