import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import { LotInfoType, LotTradeType } from "domain/Lot/types"
import { postCabinetLotsAdd } from "infrastructure/persistence/api/data/actions"
import { useMutation } from "react-fetching-library"
import { useNavigate } from "react-router-dom"
import { FileToURLDataBase64 } from "utils/file"

import { lotNewStorage } from "../edit"

function LotNewPreviewView() {
  const files = lotNewStorage.get<File[]>("files") || []
  const specifications = lotNewStorage.get<LotInfoType["specifications"]>("specifications") || []
  const description = lotNewStorage.get<LotInfoType["description"]>("description") || ""

  const category = lotNewStorage.get<number>("category") || -1
  const city = lotNewStorage.get<LotTradeType["city"]>("city") || ""
  const price = lotNewStorage.get<string>("price") || ""
  const title = lotNewStorage.get<LotTradeType["title"]>("title") || ""
  const date = lotNewStorage.get<string>("date") || "12-20-20"
  const delivery = lotNewStorage.get<string>("delivery") || "all"

  const slides = (files.some(file => !(file instanceof File)) ? [] : files).map(file => URL.createObjectURL(file))

  const publishNewLot = usePublishNewLot({
    files,
    specifications,
    description,
    category,
    city,
    price,
    title,
    date
  })
  return (
    <>
      <h2 className="heading">Просмотр лота перед публикацией</h2>
      <div className="lot-info-layout">
        <LotInfo specifications={specifications} description={description} slides={slides} />
        <LotTrade delivery={delivery} city={city} price={+price} title={title} tradeStart={new Date(date)} tradeEnd={new Date(date)}>
          <Buttons>
            <Button await onClick={publishNewLot}>Опубликовать</Button>
            <ButtonLink outline to="/lots/new/edit">Редактировать</ButtonLink>
          </Buttons>
        </LotTrade>
      </div>
    </>
  )
}


interface NewLotPayload {
  files: File[]
  specifications: LotInfoType["specifications"]
  description: LotInfoType["description"]
  category: number
  city: string
  price: string | number
  title: string
  date: string | number | Date
}

function usePublishNewLot(requestPayload: NewLotPayload) {
  const navigate = useNavigate()
  const { mutate } = useMutation(postCabinetLotsAdd)
  async function publish() {
    const { error, payload: responsePayload } = await mutate({
      city: requestPayload.city,
      category: requestPayload.category,
      name: requestPayload.title,
      picture: requestPayload.files as never,
      price: Number(requestPayload.price),
      specifications: requestPayload.specifications.map(spec => ({ val: spec.value, key: spec.key })),
      trading_start: new Date(requestPayload.date).toJSON(),
      content: requestPayload.description
    })

    if (error) return
    if (responsePayload == null) return

    navigate(`/lots/${(responsePayload as unknown as { result?: { id?: string | number } })?.result?.id}`)
  }
  return publish
}

export default LotNewPreviewView