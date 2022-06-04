import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import Details from "app/components/UI/Details/Details"
import SubjectLog from "app/layouts/SubjectLog/SubjectLog"
import { getUserNotificationsByNotificationsId } from "infrastructure/persistence/api/data/actions"
import { Link } from "react-router-dom"

import LotPreview from "./LotPreview/LotPreview"
import { LotPreviewType } from "./types"

interface LotNotificationProps {
  id: number
  lot: LotPreviewType
}

function LotNotification(props: LotNotificationProps) {
  const subject = (
    <>
      <LotPreview {...props.lot} />
      <br />
      <Button>Отписаться</Button>
    </>
  )
  return (
    <QueryContainer action={getUserNotificationsByNotificationsId(props.id)}>
      {payload => (
        <SubjectLog subject={subject}>

          <Details date={new Date} summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            {/* <SellerPreview {...{
              id: 1,
              avatar: IMAGE_MOCKS[0],
              name: "ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом",
              city: "Москва",
              likes: 5,
              dislikes: 1
            }} /> */}
          </Details>
        </SubjectLog>
      )}
    </QueryContainer>
  )
}

export default LotNotification
