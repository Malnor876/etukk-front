import "./Lot.scss"

import Button from "app/components/UI/Button/Button"
import { PopupBidAccepted } from "app/views/lot/modals/PopupBidAccepted"
import PopupConfirmBidUp from "app/views/lot/modals/PopupConfirmBidUp"
import { postCabinetLotsPlaceBet } from "infrastructure/persistence/api/data/actions"
import { Modal } from "modules/modal/controller"
import { useState } from "react"
import { useMutation } from "react-fetching-library"
import { Link } from "react-router-dom"

import { LotBidType } from "./types"

interface LotBidUpProps extends LotBidType {
  id: number
}

function LotBidUpMutation(props: LotBidUpProps) {
  const [bidMultiplier, setBidMultiplier] = useState(1)
  const [currentBid, setCurrentBid] = useState(props.current)
  const [stage, setStage] = useState<"default" | "choice" | "confirm">("default")
  const { mutate } = useMutation(postCabinetLotsPlaceBet)
  function bidUp(on: number) {
    setCurrentBid(currentBid + (props.step * on))
    setStage("confirm")
  }
  function confirmBidUp() {
    async function onSubmit() {
      const { error, payload } = await mutate({ bet: bidMultiplier, lots: props.id })
      if (error) return
      if (payload == null) return

      console.log(payload)

      await Modal.open(PopupBidAccepted)
      setStage("default")
    }
    Modal.open(PopupConfirmBidUp, { onSubmit })
  }
  switch (stage) {
    case "choice":
      return (
        <div className="lot-bid-up">
          <div className="lot-bid-up__entry"><span>Текущая ставка</span><span>{currentBid.toPrice("ru", "rub")}</span></div>
          <p className="lot-bid-up__text">
            *Нажимая “поднять ставку” вы соглашаетесь с <Link to="terms">политикой предоставления услуг</Link>.
            <br />
            Минимальная стоимость услуг площадки по организации доставки и безопасной сделки для данного лота составит от {(currentBid * 0.5).toPrice("ru", "rub")}
          </p>
          <div className="lot-bid-up__buttons">
            <Button onClick={() => bidUp(1)}>Поднять на  шаг</Button>
            <Button onClick={() => bidUp(2)}>шаг Х 2</Button>
            <Button onClick={() => bidUp(3)}>шаг Х 3</Button>
          </div>
        </div>
      )

    case "confirm":
      return (
        <div className="lot-bid-up">
          <div className="lot-bid-up__entries">
            <div className="lot-bid-up__entry"><span>Текущая ставка</span><span>{props.current.toPrice("ru", "rub")}</span></div>
            <div className="lot-bid-up__entry"><span>Ваша ставка</span><span>{currentBid.toPrice("ru", "rub")}</span></div>
          </div>
          <br />
          <br />
          <Button onClick={confirmBidUp}>Отправить</Button>
        </div>
      )

    default:
      return (
        <div className="lot-bid-up lot-bid-up--box">
          <div className="lot-bid-up__entry lot-bid-up__entry--column">
            <span>Текущая ставка</span>
            <span>{currentBid.toPrice("ru", "rub")}</span>
          </div>
          <Button onClick={() => setStage("choice")}>Поднять ставку</Button>
        </div>
      )
  }
}

export default LotBidUpMutation