import Backward from "app/components/UI/Backward/Backward"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import CountableTimer from "app/components/UI/CountableTimer/CountableTimer"
import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import {useState} from "react"
import {useSelector} from "react-redux"

import {LotDelivery, LotInfoType, LotStatus} from "../types"

interface LotInfoDetailsProps
  extends Pick<
    LotInfoType,
    | "id"
    | "title"
    | "city"
    | "startPrice"
    | "startEndInterval"
    | "status"
    | "delivery"
    | "buyerId"
    | "user_id"
  > {}

function LotInfoDetails(props: LotInfoDetailsProps) {
  const user = useSelector(state => state.user)
  const myId = user.id
  const isMyLot = Number(myId) === Number(props.user_id)
  const [tradable, setTradable] = useState(
    props.startEndInterval.isInInterval(new Date())
  )
  const getStatus = (status: string) => {
    switch (status) {
      case LotStatus.DRAFTED:
        return "Черновик"
      case LotStatus.MODERATION:
        return "На проверке"
      case LotStatus.PUBLISHED:
        return "Опубликовано"
      case LotStatus.REJECTED:
        return "Отклонено"
      case LotStatus.SOLD:
        return "Продано"
      default:
        break
    }
  }
  return (
    <div className="lot-info-details">
      {isMyLot && (
        <h3 style={{color: "#ED1D4A", textAlign: "end"}}>
          {getStatus(props.status)?.toUpperCase()}
        </h3>
      )}
      <Backward>{props.title}</Backward>

      <div className="lot-info-details__city">
        <span>{props.city}</span>
        <Icon
          name={props.delivery === LotDelivery.all ? "truck" : "building"}
        />
      </div>
      <Entries>
        <Entry>
          <span>Начальная ставка</span>
          <big>{props.startPrice.format()}</big>
        </Entry>
        <Entry>
          <span>Начало торгов</span>
          <span>{props.startEndInterval.humanizedDate1}</span>
        </Entry>
        <Entry>
          <span>Окончание торгов</span>
          {tradable ? (
            <big>
              <CountableTimer
                until={props.startEndInterval.date2}
                onEnd={() => setTradable(false)}
              />
            </big>
          ) : (
            <span>{props.startEndInterval.humanizedDate2}</span>
          )}
        </Entry>
      </Entries>

      {user.auth && props.buyerId === user.id && (
        <div>
          <ButtonLink to={`/profile/purchases/checkout/${props.id}`}>
            Перейти к оплате
          </ButtonLink>
        </div>
      )}
    </div>
  )
}

export default LotInfoDetails
