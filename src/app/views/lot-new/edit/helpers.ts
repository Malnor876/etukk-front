import { LotDelivery, LotInfoType } from "domain/Lot/types"
import { postLotDraft } from "infrastructure/persistence/api/data/actions"
import { useMutation } from "react-fetching-library"
import { useNavigate } from "react-router-dom"
import { offsetDateDay } from "utils/date.helpers"
import { FileToURLDataBase64 } from "utils/file"

import { lotDraftStorage } from "."

// interface NewLotPayload {
//   files: File[]
//   specifications: LotInfoType["specifications"]
//   description: LotInfoType["description"]
//   category: number
//   city: string
//   price: string | number
//   title: string
//   date: string | number | Date
//   delivery: SchemaLotDeliveryOptions
// }

export function useDraftNewLot() {
  const files = lotDraftStorage.get<File[]>("files") || []

  const specifications = lotDraftStorage.get<LotInfoType["specifications"]>("specifications") || []
  const description = lotDraftStorage.get<LotInfoType["description"]>("description") || ""

  const category = lotDraftStorage.get<number>("category") || -1
  const city = lotDraftStorage.get<LotInfoType["city"]>("city") || ""
  const price = lotDraftStorage.get<string>("price") || ""
  const title = lotDraftStorage.get<LotInfoType["title"]>("title") || "unknown"
  const date = lotDraftStorage.get<string>("date") || "1"
  const delivery = (lotDraftStorage.get<string>("delivery") || "all") as LotDelivery



  const [startTime, endTime] = getBiddingTime(+date)

  const navigate = useNavigate()
  const { mutate } = useMutation(postLotDraft)
  async function draft() {
    const { error, payload: responsePayload } = await mutate({
      city: city,
      categories: [category],
      name: title,
      start_price: Number(price),
      lotspecifications: specifications.map(spec => ({ value: spec.value, name: spec.key })),
      bidding_start_time: startTime.toJSON(),
      bidding_end_time: endTime.toJSON(),
      description: description,
      delivery_options: delivery === LotDelivery.all ? "intercity" : "in_city",
      video_url: "",
      lotphotos: await Promise.all(files.map(FileToURLDataBase64)),
    })

    if (error) return
    if (responsePayload == null) return

    navigate(`/lots/${responsePayload.id}/preview`)
    lotDraftStorage.clear()
  }

  return draft
}

export function getBiddingTime(date: number): [Date, Date] {
  const today = new Date(new Date().setHours(new Date().getHours() + 1))
  const tomorrow = offsetDateDay(new Date(new Date().setHours(new Date().getHours() + 1)), 1)

  const oneHourToday = new Date(new Date(today).setHours(today.getHours() + 1))
  const twoHoursToday = new Date(new Date(today).setHours(today.getHours() + 2))

  const oneHourTomorrow = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 1))
  const twoHoursTomorrow = new Date(new Date(tomorrow).setHours(tomorrow.getHours() + 2))

  switch (date) {
    case 1:
      return [today, oneHourToday]

    case 2:
      return [today, twoHoursToday]

    case 3:
      return [tomorrow, oneHourTomorrow]

    case 4:
      return [tomorrow, twoHoursTomorrow]

    default:
      return [tomorrow, oneHourTomorrow]
  }
}