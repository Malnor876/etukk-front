import SellerPreview from "app/components/business/SellerPreview/SellerPreview"
import { ReactError } from "app/components/services/ErrorBoundary/ErrorBoundary.errors"
import Button from "app/components/UI/Button/Button"
import Details from "app/components/UI/Details/Details"
import { Modal } from "modules/modal/controller"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

import PopupDispute from "./modals/PopupDispute"
import PopupReport from "./modals/PopupReport/PopupReport"
import PopupReview from "./modals/PopupReview/PopupReview"

function LotView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotView, "got no lotId")
  }
  return (
    <>
      <Button onClick={() => Modal.open(PopupReport)}>PopupReport</Button>
      <Button onClick={() => Modal.open(PopupReview)}>PopupReview</Button>
      <Button onClick={() => Modal.open(PopupDispute)}>PopupDispute</Button>

      <div>
        <Details date={new Date} summary={<>Продавец разместил новый лот в категории <Link to="/1">Мебель</Link></>}>
          <SellerPreview
            avatar=""
            name="ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом"
            city="Москва"
            likes={5}
            dislikes={1}
            lotsCount={1}
          />
        </Details>
      </div>
    </>
  )
}

export default LotView
