import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import LotNotification from "areas/lot/LotNotification"
import LotPreview from "areas/lot/LotPreview/LotPreview"
import LotSeller from "areas/lot/LotSeller"
import { LotPreviewType } from "areas/lot/types"
import SellerPreview from "areas/seller/SellerPreview/SellerPreview"
import { getUserNotifications, getUserNotificationsSubscriptions } from "infrastructure/persistence/api/data/actions"
import { mapLotPreview } from "infrastructure/persistence/api/mappings/lots"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"
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
        <Route path="subs" element={<NotificationsUsersContainer />} />
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
  const [chosenNotification, setChosenNotification] = useState<{ id: number; user: UserSigned } | null>(null)

  if (chosenNotification !== null) {
    return (
      <LotSeller {...chosenNotification} />
    )
  }

  return (
    <QueryContainer action={getUserNotificationsSubscriptions()}>
      {payload => (
        <Previews>
          {payload.filter(item => item.user != null).map(notification => (
            <button type="button" onClick={() => setChosenNotification({ id: notification.id, user: mapUser(notification.user) })} key={notification.user.id}>
              <SellerPreview {...mapUser(notification.user)} />
            </button>
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

export default NotificationsView
