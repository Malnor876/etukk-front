import { ReactError } from "app/components/services/ErrorBoundary/ErrorBoundary.errors"
import Button from "app/components/UI/Button/Button"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Buttons from "app/layouts/Buttons/Buttons"
import { IMAGE_MOCKS } from "constants/mocks"
import LotBidUp from "domain/Lot/LotBidUp"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import SellerCompact from "domain/seller/SellerCompact/SellerCompact"
import { Modal } from "modules/modal/controller"
import { useParams } from "react-router"

import DialogArchiveLot from "./modals/DialogArchiveLot"
import { PopupBidAccepted } from "./modals/PopupBidAccepted"
import PopupConfirmBidUp from "./modals/PopupConfirmBidUp"
import { PopupDataAccepted } from "./modals/PopupDataAccepted"
import { PopupDeliveryRequest } from "./modals/PopupDeliveryRequest"
import PopupDispute from "./modals/PopupDispute"
import { PopupPasswordRecoverLinkSent } from "./modals/PopupPasswordRecoverLinkSent"
import PopupReport from "./modals/PopupReport/PopupReport"
import PopupReportAccepted from "./modals/PopupReport/PopupReportAccepted"
import PopupReview from "./modals/PopupReview/PopupReview"
import PopupReviewAccepted from "./modals/PopupReview/PopupReviewAccepted"

function LotView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotView, "lotId is not number")
  }

  function onBookmark() {
    1
  }

  const specifications = [
    { key: "Марка", value: "Русмебель" },
    { key: "Год выпуска", value: "2017" },
    { key: "Номер модели", value: "123456789101112" }
  ]
  return (
    <div className="lot-view">
      <div className="lot-info-layout">
        <div className="lot-info-layout__section">
          <LotInfo slides={[...IMAGE_MOCKS]} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta earum tenetur odio eius nostrum officiis possimus, dolorum asperiores ratione sint dolor veniam obcaecati unde fugiat incidunt, quasi aliquam! Tenetur." specifications={specifications} bookmarked onBookmark={onBookmark} />
          <SellerCompact dislikes={1} id={1} likes={5} name="Игорь" />
        </div>
        <div className="lot-info-layout__section">
          <LotTrade price={100} city="Москва" title="ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ" tradeStart={new Date} tradeEnd={new Date} />
          <LotBidUp current={1100} start={100} step={100} />
        </div>
      </div>
      <Column>
        <Button onClick={() => Modal.open(PopupReport, { onSubmit: () => { 1 } })}>PopupReport</Button>
        <Button onClick={() => Modal.open(PopupReportAccepted)}>PopupReportAccepted</Button>
        <br />
        <Button onClick={() => Modal.open(PopupReview)}>PopupReview</Button>
        <Button onClick={() => Modal.open(PopupReviewAccepted)}>PopupReviewAccepted</Button>
        <br />
        <Button onClick={() => Modal.open(PopupDispute)}>PopupDispute</Button>
        <Button onClick={() => Modal.open(DialogArchiveLot, { onSubmit: () => { 1 } })}>DialogArchiveLot</Button>
        <Button onClick={() => Modal.open(PopupBidAccepted)}>PopupBidAccepted</Button>
        <Button onClick={() => Modal.open(PopupConfirmBidUp, { onSubmit: () => { 1 } })}>PopupConfirmBidUp</Button>
        <Button onClick={() => Modal.open(PopupDataAccepted)}>PopupDataAccepted</Button>
        <Button onClick={() => Modal.open(PopupDeliveryRequest)}>PopupDeliveryRequest</Button>
        <Button onClick={() => Modal.open(PopupPasswordRecoverLinkSent)}>PopupPasswordRecoverLinkSent</Button>
      </Column>
    </div>
  )
}

export default LotView