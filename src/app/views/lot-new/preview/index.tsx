import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import { IMAGE_MOCKS } from "constants/mocks"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import { LotInfoType, LotTradeType } from "domain/Lot/types"
import TemporaryStorage from "infrastructure/persistence/TemporaryStorage"

function LotNewPreviewView() {
  const lotNewStorage = new TemporaryStorage("lot-new")

  const specifications = lotNewStorage.get<LotInfoType["specifications"]>("specifications") || []
  const description = lotNewStorage.get<LotInfoType["description"]>("description") || ""

  const city = lotNewStorage.get<LotTradeType["city"]>("city") || ""
  const price = lotNewStorage.get<LotTradeType["price"]>("price") || 0
  const title = lotNewStorage.get<LotTradeType["title"]>("title") || ""
  const date = lotNewStorage.get<string>("date") || "12-20-20"

  return (
    <>
      <h2 className="heading">Просмотр лота перед публикацией</h2>
      <div className="lot-layout">
        <LotInfo specifications={specifications} description={description} slides={IMAGE_MOCKS} />
        <LotTrade city={city} price={price} title={title} tradeStart={new Date(date)} tradeEnd={new Date(date)}>
          <Buttons>
            <ButtonLink to="../edit">Редактировать</ButtonLink>
            <Button outline>Поместить в архив</Button>
          </Buttons>
        </LotTrade>
      </div>
    </>
  )
}

export default LotNewPreviewView