import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import { QueryErrorCoverBoundary } from "app/components/containers/QueryErrorCoverBoundary/QueryErrorCoverBoundary"
import Button from "app/components/UI/Button/Button"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import { LotInfoLayout } from "domain/Lot/Lot"
import { Modal } from "modules/modal/controller"
import { useParams } from "react-router"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"

import DialogArchiveLot from "./modals/DialogArchiveLot"
import DialogBidAccepted from "./modals/DialogBidAccepted"
import DialogConfirmBidUp from "./modals/DialogConfirmBidUp"
import { DialogDataAccepted } from "./modals/DialogDataAccepted"
import { DialogDeliveryRequest } from "./modals/DialogDeliveryRequest"
import { DialogPasswordRecoverLinkSent } from "./modals/DialogPasswordRecoverLinkSent"
import DialogReportAccepted from "./modals/ModalReport/DialogReportAccepted"
import PopupReport from "./modals/ModalReport/PopupReport"
import PopupDispute from "./modals/PopupDispute"
import DialogReviewAccepted from "./modals/PopupReview/DialogReviewAccepted"
import PopupReview from "./modals/PopupReview/PopupReview"

function LotView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotView, "lotId is not number")
  }

  return (
    <div className="lot-view">
      <QueryErrorCoverBoundary>
        <LotContainer id={+lotId} />
      </QueryErrorCoverBoundary>

      <Column>
        <Button onClick={() => Modal.open(PopupReport, { onSubmit: () => { 1 } })}>PopupReport</Button>
        <Button onClick={() => Modal.open(DialogReportAccepted)}>PopupReportAccepted</Button>
        <br />
        <Button onClick={() => Modal.open(PopupReview)}>PopupReview</Button>
        <Button onClick={() => Modal.open(DialogReviewAccepted)}>PopupReviewAccepted</Button>
        <br />
        <Button onClick={() => Modal.open(PopupDispute)}>PopupDispute</Button>
        <Button onClick={() => Modal.open(DialogArchiveLot, { onSubmit: () => { 1 } })}>DialogArchiveLot</Button>
        <Button onClick={() => Modal.open(DialogBidAccepted)}>PopupBidAccepted</Button>
        <Button onClick={() => Modal.open(DialogConfirmBidUp, { onSubmit: () => { 1 } })}>PopupConfirmBidUp</Button>
        <Button onClick={() => Modal.open(DialogDataAccepted)}>PopupDataAccepted</Button>
        <Button onClick={() => Modal.open(DialogDeliveryRequest)}>PopupDeliveryRequest</Button>
        <Button onClick={() => Modal.open(DialogPasswordRecoverLinkSent)}>PopupPasswordRecoverLinkSent</Button>
      </Column>
    </div>
  )
}


interface LotContainerProps {
  id: number
}

function LotContainer(props: LotContainerProps) {
  return (
    <LotInfoLayout slides={[]} description={""} specifications={[]} title={"asd"} city={""} startEndInterval={new DateInterval(new Date, new Date)} delivery={"all"} id={0} type={"organization"} reviews={{
      likes: 0,
      dislikes: 0
    }} rating={0} startPrice={new Price(100)} currentBid={new Price(100)}

    />
  )
}

export default LotView