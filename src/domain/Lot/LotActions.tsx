import "./Lot.scss"

import Icon from "app/components/UI/Icon/Icon"
import PopupReport from "app/views/lot/modals/ModalReport/PopupReport"
import ClientAPI from "infrastructure/persistence/api/client"
import { Modal } from "modules/modal/controller"

interface LotActionsProps {
  id: number
}

function LotActions(props: LotActionsProps) {
  function share() { 1 }
  function report() {
    function onSubmit() {
      ClientAPI
      alert("Reported")
    }
    Modal.open(PopupReport, { onSubmit })
  }
  return (
    <div className="lot-actions">
      <button className="lot-actions__button" type="button" onClick={share}>
        <Icon name="share" />
        <span>Поделиться</span>
      </button>
      <button className="lot-actions__button" type="button" onClick={report}>
        <Icon className="lot-actions__icon" name="attention" />
        <span>Пожаловаться</span>
      </button>
    </div>
  )
}

export default LotActions