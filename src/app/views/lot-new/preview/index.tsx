import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import { LotInfoType, LotTradeType } from "domain/Lot/types"

import { lotNewStorage } from "../edit"

function LotNewPreviewView() {
  const files = lotNewStorage.get<File[]>("files") || []
  const specifications = lotNewStorage.get<LotInfoType["specifications"]>("specifications") || []
  const description = lotNewStorage.get<LotInfoType["description"]>("description") || ""

  const city = lotNewStorage.get<LotTradeType["city"]>("city") || ""
  const price = lotNewStorage.get<string>("price") || 0
  const title = lotNewStorage.get<LotTradeType["title"]>("title") || ""
  const date = lotNewStorage.get<string>("date") || "12-20-20"
  const delivery = lotNewStorage.get<string>("delivery") || "all"

  const images = (files.some(file => !(file instanceof File)) ? [] : files).map(file => URL.createObjectURL(file))
  return (
    <>
      <h2 className="heading">Просмотр лота перед публикацией</h2>
      <div className="lot-info-layout">
        <LotInfo specifications={specifications} description={description} slides={images} />
        <LotTrade delivery={delivery} city={city} price={+price} title={title} tradeStart={new Date(date)} tradeEnd={new Date(date)}>
          <Buttons>
            <Button>Опубликовать</Button>
            <ButtonLink outline to="/lots/new/edit">Редактировать</ButtonLink>
          </Buttons>
        </LotTrade>
      </div>
    </>
  )
}

export default LotNewPreviewView