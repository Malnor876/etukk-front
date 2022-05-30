import "./Lot.scss"

import Slider from "app/components/containers/Slider/Slider"
import Backward from "app/components/UI/Backward/Backward"
import Bookmark from "app/components/UI/Bookmark/Bookmark"
import Button from "app/components/UI/Button/Button"
import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import { DialogBidAccepted } from "app/views/lot/modals/DialogBidAccepted"
import DialogConfirmBidUp from "app/views/lot/modals/DialogConfirmBidUp"
import useResizeObserverSize, { DeviceWidths } from "hooks/useResizeObserverEntry"
import { postCabinetLotsPlaceBet } from "infrastructure/persistence/api/data/actions"
import _ from "lodash"
import { Modal } from "modules/modal/controller"
import { ReactNode, useState } from "react"
import { useMutation } from "react-fetching-library"
import { Link } from "react-router-dom"
import { Price } from "utils/extensions"

import { LotInfoType } from "./types"

interface LotInfoProps extends LotInfoType {
  children?: ReactNode
}

export function LotInfoLayout(props: LotInfoProps) {
  const Preview = <LotInfoPreview {..._.pick(props, "id", "slides")} />
  const Summary = <LotInfoSummary {..._.pick(props, "description", "specifications")} />
  const Details = <LotInfoDetails {..._.pick(props, "title", "city", "price", "startEndInterval", "delivery")} />
  const BidOrChildren = props.children || (
    <LotInfoBid {..._.pick(props, "id", "current", "step", "price")} />
  )

  const { inlineSize: bodySize } = useResizeObserverSize(document.body)
  if (bodySize <= DeviceWidths.Mobile) {
    return (
      <div className="lot-info-layout">
        {Preview}
        {Details}
        {Summary}
        <div className="lot-info-layout__fixed">
          {BidOrChildren}
        </div>
      </div>
    )
  }
  return (
    <div className="lot-info-layout">
      <div className="lot-info-layout__section">
        {Preview}
        {Summary}
      </div>
      <div className="lot-info-layout__section">
        {Details}
        {BidOrChildren}
      </div>
    </div>
  )
}

interface LotInfoPreviewProps extends Pick<LotInfoType, "id" | "slides" | "bookmarked"> { }

export function LotInfoPreview(props: LotInfoPreviewProps) {
  return (
    <div className="lot-info-preview">
      <Slider slides={props.slides} />
      <Bookmark className="lot-info-preview__bookmark" type="lots" id={props.id} defaultValue={props.bookmarked} />
    </div>
  )
}


interface LotInfoSummaryProps extends Pick<LotInfoType, "description" | "specifications"> { }

export function LotInfoSummary(props: LotInfoSummaryProps) {
  return (
    <div className="lot-info-summary">
      <h5>Описание лота</h5>
      <p className="lot-info-summary__description">{props.description}</p>
      <h5>Характеристики</h5>
      <Entries>
        {props.specifications.map(((specification, index) => (
          <Entry key={index}>
            <span>{specification.key}</span>
            <span>{specification.value}</span>
          </Entry>
        )))}
      </Entries>
    </div>
  )
}


interface LotInfoDetailsProps extends Pick<LotInfoType, "title" | "city" | "price" | "startEndInterval" | "delivery"> { }

export function LotInfoDetails(props: LotInfoDetailsProps) {
  return (
    <div className="lot-info-details">
      <Backward>{props.title}</Backward>
      <div className="lot-info-details__city">
        <span>г. {props.city}</span>
        <Icon name={props.delivery === "all" ? "truck" : "building"} />
      </div>
      <Entries>
        <Entry>
          <span>Начальная ставка</span>
          <big>{props.price.format()}</big>
        </Entry>
        <Entry>
          <span>Начало торгов</span>
          <span>{props.startEndInterval.humanizedDate1}</span>
        </Entry>
        <Entry>
          <span>Окончание торгов</span>
          <span>{props.startEndInterval.humanizedDate2}</span>
        </Entry>
      </Entries>
    </div>
  )
}


interface LotInfoBidProps extends Pick<LotInfoType, "id" | "current" | "step" | "price"> { }


function LotInfoBid(props: LotInfoBidProps) {
  const [bidMultiplier, setBidMultiplier] = useState(1)
  const [currentBid, setCurrentBid] = useState(props.current)
  const [stage, setStage] = useState<"default" | "choice" | "confirm">("default")
  const { mutate } = useMutation(postCabinetLotsPlaceBet)
  function bidUp(on: number) {
    setCurrentBid(new Price(+currentBid + (props.step * on)))
    setStage("confirm")
  }
  function confirmBidUp() {
    async function onSubmit() {
      await Modal.open(DialogBidAccepted)
      const { error, payload } = await mutate({ bet: bidMultiplier, lots: props.id })
      if (error) return
      if (payload == null) return
      console.log(error, payload)

      console.log(payload)

      setStage("default")
    }

    Modal.open(DialogConfirmBidUp, { onSubmit })
  }
  switch (stage) {
    case "choice":
      return (
        <div className="lot-info-bid">
          <div className="lot-info-bid__entry"><span>Текущая ставка</span><span>{currentBid.format()}</span></div>
          <p className="lot-info-bid__text">
            *Нажимая “поднять ставку” вы соглашаетесь с <Link to="terms">политикой предоставления услуг</Link>.
            <br />
            Минимальная стоимость услуг площадки по организации доставки и безопасной сделки для данного лота составит от {currentBid.format()}
          </p>
          <div className="lot-info-bid__buttons">
            <Button onClick={() => bidUp(1)}>Поднять на  шаг</Button>
            <Button onClick={() => bidUp(2)}>шаг Х 2</Button>
            <Button onClick={() => bidUp(3)}>шаг Х 3</Button>
          </div>
        </div>
      )

    case "confirm":
      return (
        <div className="lot-info-bid">
          <div className="lot-info-bid__entries">
            <div className="lot-info-bid__entry"><span>Текущая ставка</span><span>{props.current.format()}</span></div>
            <div className="lot-info-bid__entry"><span>Ваша ставка</span><span>{currentBid.format()}</span></div>
          </div>
          <br />
          <br />
          <Button onClick={confirmBidUp}>Отправить</Button>
        </div>
      )

    default:
      return (
        <div className="lot-info-bid lot-info-bid--box">
          <div className="lot-info-bid__entry lot-info-bid__entry--column">
            <span>Текущая ставка</span>
            <span>{currentBid.format()}</span>
          </div>
          <Button onClick={() => setStage("choice")}>Поднять ставку</Button>
        </div>
      )
  }
}