import RequiredAuthCover from "app/components/containers/QueryContainer/RequiredAuthCover"
import Button from "app/components/UI/Button/Button"
import DialogBidAccepted, { DialogError } from "app/views/lot/modals/DialogBidAccepted"
import DialogConfirmBidUp from "app/views/lot/modals/DialogConfirmBidUp"
import { postLotByLotIdBet } from "infrastructure/persistence/api/data/actions"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"
import { Modal } from "modules/modal/controller"
import { useState } from "react"
import { useClient } from "react-fetching-library"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { LotInfoType } from "../types"


interface LotInfoBidProps extends Pick<LotInfoType, "id" | "currentPrice" | "betStep"> { }

function LotInfoBid(props: LotInfoBidProps) {
  const [bidMultiplier, setBidMultiplier] = useState(1)
  const [prevPrice, setPrevPrice] = useState(props.currentPrice)
  const [currentPrice, setCurrentPrice] = useState(props.currentPrice)
  const [stage, setStage] = useState<"default" | "choice" | "confirm">("default")
  const client = useClient()
  function bidUp(on: number) {
    setBidMultiplier(on)
    setCurrentPrice(currentPrice.add(props.betStep.multiply(on)))
    // setNextPrice(new Price(+props.currentPrice + (+props.betStep * on)))
    setStage("confirm")
  }
  function confirmBidUp() {
    async function onSubmit() {
      const { error, payload } = await client.query(postLotByLotIdBet(props.id, bidMultiplier))
      setStage("default")

      if (error) {
        await Modal.open(DialogError)
        setCurrentPrice(props.currentPrice)
        return
      }
      if (payload == null) return

      const lot = mapLot(payload.lot)

      console.log(currentPrice, currentPrice)

      setPrevPrice(currentPrice)
      setCurrentPrice(lot.currentPrice)

      await Modal.open(DialogBidAccepted)
    }

    Modal.open(DialogConfirmBidUp, { onSubmit })
  }

  const user = useSelector(state => state.user)
  if (!user.auth) {
    return (
      <RequiredAuthCover />
    )
  }

  switch (stage) {
    case "choice":
      return (
        <div className="lot-info-bid">
          <div className="lot-info-bid__entry"><span>Текущая ставка</span><span>{currentPrice.format()}</span></div>
          <p className="lot-info-bid__text">
            *Нажимая “поднять ставку” вы соглашаетесь с <Link to="terms">политикой предоставления услуг</Link>.
            <br />
            Минимальная стоимость услуг площадки по организации доставки и безопасной сделки для данного лота составит от {currentPrice.format()}
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
            <div className="lot-info-bid__entry"><span>Текущая ставка</span><span>{prevPrice.format()}</span></div>
            <div className="lot-info-bid__entry"><span>Ваша ставка</span><span>{currentPrice.format()}</span></div>
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
            <span>{currentPrice.format()}</span>
          </div>
          <Button onClick={() => setStage("choice")}>Поднять ставку</Button>
        </div>
      )
  }
}

export default LotInfoBid
