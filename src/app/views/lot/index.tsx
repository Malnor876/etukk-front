import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import { QueryErrorCoverBoundary } from "app/components/containers/QueryErrorCoverBoundary/QueryErrorCoverBoundary"
import Button from "app/components/UI/Button/Button"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import { LotInfoLayout } from "domain/Lot/Lot"
import { getLotByLotId } from "infrastructure/persistence/api/data/actions"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"
import { Modal } from "modules/modal/controller"
import { Helmet } from "react-helmet"
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
      <Helmet>
        <title>Просмотр лота | etukk.ru</title>
      </Helmet>
      <QueryErrorCoverBoundary>
        <LotContainer id={+lotId} />
      </QueryErrorCoverBoundary>

      {/* <Column>
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
      </Column> */}
    </div>
  )
}


interface LotContainerProps {
  id: number
}

function LotContainer(props: LotContainerProps) {
  return (
    <QueryContainer action={getLotByLotId(props.id)} mapping={mapLot}>
      {payload => (
        <LotInfoLayout {...payload} />
      )}
    </QueryContainer>
  )
}

export default LotView