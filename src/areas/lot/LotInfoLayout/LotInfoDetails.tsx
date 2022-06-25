import Backward from "app/components/UI/Backward/Backward"
import CountableTimer from "app/components/UI/CountableTimer/CountableTimer"
import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"

import { LotDelivery, LotInfoType } from "../types"

interface LotInfoDetailsProps extends Pick<LotInfoType, "title" | "city" | "startPrice" | "startEndInterval" | "delivery"> { }

function LotInfoDetails(props: LotInfoDetailsProps) {
  const started = Date.now() > props.startEndInterval.date1.getTime()
  const ended = Date.now() >= props.startEndInterval.date2.getTime()
  const tradable = started && !ended
  return (
    <div className="lot-info-details">
      <Backward>{props.title}</Backward>
      <div className="lot-info-details__city">
        <span>г. {props.city}</span>
        <Icon name={props.delivery === LotDelivery.all ? "truck" : "building"} />
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
          <span>{tradable ? <CountableTimer until={props.startEndInterval.date1} /> : props.startEndInterval.humanizedDate2}</span>
        </Entry>
      </Entries>
    </div>
  )
}

export default LotInfoDetails
