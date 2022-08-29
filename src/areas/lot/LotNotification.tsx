import "./Lot.scss"

import Backward from "app/components/UI/Backward/Backward"
import Details from "app/components/UI/Details/Details"
import useParam from "hooks/useParam"
import {
  getLotByLotId,
  getLotDraftByDraftId,
  getUserNotifications,
} from "infrastructure/persistence/api/data/actions"
import {
  SchemaLot,
  SchemaUserNotifications,
} from "infrastructure/persistence/api/data/schemas"
import {mapLot} from "infrastructure/persistence/api/mappings/lots"
import {useEffect, useState} from "react"
import {useClient} from "react-fetching-library"

import LotPreview from "./LotPreview/LotPreview"
import {LotInfoType} from "./types"

// interface LotNotificationProps {
//   id: number
//   lot: LotPreviewType
// }

function LotNotification() {
  const client = useClient()
  const lotId = useParam("lotId", true)
  const [lotById, setLotById] = useState<LotInfoType>()
  const [notificationsByLot, setNotificationsByLot] = useState<
    SchemaUserNotifications[]
  >([])

  useEffect(() => {
    async function getLot() {
      const response =
        (await client.query(getLotDraftByDraftId(lotId))) ??
        (await client.query(getLotByLotId(lotId)))
      setLotById(mapLot(response.payload as SchemaLot))
    }
    getLot()
  }, [])

  useEffect(() => {
    async function getMyNotificationsByLot() {
      const {payload} = await client.query(
        getUserNotifications({lot_id: lotId})
      )
      console.log("payload", payload)
      const sortedNotifications = payload?.sort(function (a, b) {
        if (a.event_time && b.event_time && a.event_time < b.event_time) {
          return 1
        }
        if (a.event_time && b.event_time && a.event_time > b.event_time) {
          return -1
        }
        return 0
      })
      payload &&
        setNotificationsByLot(sortedNotifications as SchemaUserNotifications[])
    }
    getMyNotificationsByLot()
  }, [])

  return (
    <>
      <Backward />
      <div className="lot-notification">
        {lotById && <LotPreview {...lotById} />}
        <div className="lot-notification--column">
          {notificationsByLot[0] &&
            notificationsByLot.map(notification => (
              <Details
                key={notification.id}
                date={new Date(notification.event_time)}
                summary={notification.text}>
                {/* <SellerPreview {...{
              id: 1,
              avatar: IMAGE_MOCKS[0],
              name: "ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом",
              city: "Москва",
              likes: 5,
              dislikes: 1
         }} /> */}
              </Details>
            ))}
        </div>
      </div>
    </>
  )
}

export default LotNotification
