import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import { QueryErrorCoverBoundary } from "app/components/containers/QueryErrorCoverBoundary/QueryErrorCoverBoundary"
import Button from "app/components/UI/Button/Button"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import { IMAGE_MOCKS } from "constants/mocks"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import { Modal } from "modules/modal/controller"
import { useParams } from "react-router"

import DialogArchiveLot from "./modals/DialogArchiveLot"
import { DialogBidAccepted } from "./modals/DialogBidAccepted"
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
    <QueryErrorCoverBoundary>
      <LotContainer id={+lotId} />
    </QueryErrorCoverBoundary>
  )
}


interface LotContainerProps {
  id: number
}

function LotContainer(props: LotContainerProps) {
  return (
    // <QueryContainer action={getGetLotsById(props.id)} mapping={mapLotsContentItem}>
    //   {payload => (
    <div className="lot-info-layout">
      {/* <Mutation actionCreator={postCabinetFavoriteAdd}>
          {({ mutate }) => (
            <LotInfo {...payload.info} onBookmark={() => mutate({ type: "lots", item: props.id })} />
          )}
        </Mutation> */}
      <LotInfo description="" slides={IMAGE_MOCKS} specifications={[]} bookmarked />
      <LotTrade city="" price={100} title="asd" tradeEnd={new Date} tradeStart={new Date} delivery="" />
      {/* <LotBidUpMutation {...payload.bid} id={props.id} /> */}
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
    //   )}
    // </QueryContainer>
  )
}

function LotContainerDesktop(props: LotContainerProps) {
  return (
    // <QueryContainer action={getGetLotsById(props.id)} mapping={mapLotsContentItem}>
    //   {payload => (
    <div className="lot-info-layout">
      <div className="lot-info-layout__section">
        {/* <Mutation actionCreator={postCabinetFavoriteAdd}>
          {({ mutate }) => (
            <LotInfo {...payload.info} onBookmark={() => mutate({ type: "lots", item: props.id })} />
          )}
        </Mutation> */}
        <LotInfo description="" slides={IMAGE_MOCKS} specifications={[]} bookmarked />
      </div>
      <div className="lot-info-layout__section">
        <LotTrade city="" price={100} title="asd" tradeEnd={new Date} tradeStart={new Date} delivery="" />
        {/* <LotBidUpMutation {...payload.bid} id={props.id} /> */}
      </div>
    </div>
    //   )}
    // </QueryContainer>
  )
}

function LotContainerMobile(props: LotContainerProps) {
  return (
    // <QueryContainer action={getGetLotsById(props.id)} mapping={mapLotsContentItem}>
    //   {payload => (
    <div className="lot-info-layout">
      <div className="lot-info-layout__section">
        {/* <Mutation actionCreator={postCabinetFavoriteAdd}>
          {({ mutate }) => (
            <LotInfo {...payload.info} onBookmark={() => mutate({ type: "lots", item: props.id })} />
          )}
        </Mutation> */}
        <LotInfo description="" slides={IMAGE_MOCKS} specifications={[]} bookmarked />
      </div>
      <div className="lot-info-layout__section">
        <LotTrade city="" price={100} title="asd" tradeEnd={new Date} tradeStart={new Date} delivery="" />
        {/* <LotBidUpMutation {...payload.bid} id={props.id} /> */}
      </div>
    </div>
    //   )}
    // </QueryContainer>
  )
}

export default LotView