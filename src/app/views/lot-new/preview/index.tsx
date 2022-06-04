import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import { LotInfoLayout } from "domain/Lot/Lot"
import { LotDelivery, LotInfoType } from "domain/Lot/types"
import { postLotDraft } from "infrastructure/persistence/api/data/actions"
import { SchemaLotDeliveryOptions } from "infrastructure/persistence/api/data/schemas"
import { useMutation } from "react-fetching-library"
import { useNavigate } from "react-router-dom"
import { DateInterval } from "utils/date"
import { Price } from "utils/extensions"
import { FileToURLDataBase64 } from "utils/file"

import { lotNewStorage } from "../edit"

function LotNewPreviewView() {
  const files = lotNewStorage.get<File[]>("files") || []
  const specifications = lotNewStorage.get<LotInfoType["specifications"]>("specifications") || []
  const description = lotNewStorage.get<LotInfoType["description"]>("description") || ""

  const category = lotNewStorage.get<number>("category") || -1
  const city = lotNewStorage.get<LotInfoType["city"]>("city") || ""
  const price = lotNewStorage.get<string>("price") || ""
  const title = lotNewStorage.get<LotInfoType["title"]>("title") || ""
  const date = lotNewStorage.get<string>("date") || "12-20-20"
  const delivery = (lotNewStorage.get<string>("delivery") || "all") as LotDelivery

  const slides = (files.some(file => !(file instanceof File)) ? [] : files).map(file => URL.createObjectURL(file))

  const publishNewLot = usePublishNewLot({
    files,
    specifications,
    description,
    category,
    city,
    price,
    title,
    date,
    delivery: delivery === LotDelivery.all ? "intercity" : "in_city"
  })
  return (
    <>
      <h2 className="heading">Просмотр лота перед публикацией</h2>
      <LotInfoLayout
        slides={slides}
        description={description}
        specifications={specifications}
        title={title}
        city={city}
        startEndInterval={new DateInterval(new Date, new Date)}
        delivery={delivery}
        id={0}
        type={"organization"}
        reviews={{
          likes: 0,
          dislikes: 0
        }}
        rating={0}
        startPrice={new Price(+price)}
        currentPrice={new Price(+price)}
      >
        <Buttons>
          <Button await onClick={publishNewLot}>Опубликовать</Button>
          <ButtonLink outline to="/lots/new/edit">Редактировать</ButtonLink>
        </Buttons>
      </LotInfoLayout>
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
  delivery: SchemaLotDeliveryOptions
}

function usePublishNewLot(requestPayload: NewLotPayload) {
  const navigate = useNavigate()
  const { mutate } = useMutation(postLotDraft)
  async function publish() {
    const { error, payload: responsePayload } = await mutate({
      city: requestPayload.city,
      categories: requestPayload.category,
      name: requestPayload.title,
      // picture: requestPayload.files as never,
      start_price: Number(requestPayload.price),
      // specifications: requestPayload.specifications.map(spec => ({ val: spec.value, key: spec.key })),
      bidding_start_time: new Date().toJSON(),
      bidding_end_time: new Date(new Date().getTime() + (1 * 1000 * 60 * 60 * 24)).toJSON(),
      description: requestPayload.description,
      delivery_options: requestPayload.delivery,
      video_url: "",
      lotphotos: await Promise.all(requestPayload.files.map(FileToURLDataBase64)),
    })

    if (error) return
    if (responsePayload == null) return

    navigate(`/lots/${responsePayload.id}`)
  }
  return publish
}

export default LotNewPreviewView