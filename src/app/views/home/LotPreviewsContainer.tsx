import LoaderCover from "app/components/UI/Loader/LoaderCover"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotDelivery, LotPreviewType } from "domain/Lot/types"
import useScrollReach from "hooks/useScrollReach"
import { getLot } from "infrastructure/persistence/api/data/actions"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { UserType } from "infrastructure/persistence/redux/reducers/user/types"
import { FilteringField } from "interfaces/Nodejs"
import { useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"

interface LotPreviewsContainerProps {
  search?: string
  price?: [number, number] // [min, max]
  categories?: number[]
  seller?: "all" | "user" | "organization",
  delivery?: LotDelivery
  period?: {
    date_start: string
    date_end: string
  }
  started?: "started" | "ended" | "waiting"
}

function LotPreviewsContainer(props: LotPreviewsContainerProps) {
  const [page, setPage] = useState(1)
  const [pageSize] = useState(12)

  const filters: Partial<
    & FilteringField<"name", "icontains", string>
    & FilteringField<"currentPrice", "range", [number, number]>
    & FilteringField<"categories__id", "range", number[]>

    & FilteringField<"organization", "iexact", boolean>
    & FilteringField<"delivery_options", "iexact", LotDelivery>

    & FilteringField<"bidding_start_time" | "bidding_end_time", "iexact", string>

    & FilteringField<"trade_status", "iexact", string>
  > = {
    name__icontains: props.search,
    currentPrice__range: props.price,
    categories__id__range: props.categories,

    organization__iexact: props.seller != null && props.seller === "organization",
    delivery_options__iexact: props.delivery,

    bidding_start_time__iexact: props.period?.date_start,
    bidding_end_time__iexact: props.period?.date_end,

    // trade_status__iexact: props.started
  }

  console.log(props, filters.categories__id__range)

  const [lots, setLots] = useState<LotPreviewType[]>([])
  const response = useQuery(getLot(pageSize, (page - 1) * pageSize, filters))
  const { error, loading, payload } = response
  if (error) throw new QueryError("Error during sending request or handling response.", response)

  const [reached, resetReached] = useScrollReach(loading || payload?.length === 0, window.innerHeight / 4)

  useEffect(() => {
    if (page > 1) {
      setPage(1)
    }
    setLots([])
  }, [...Object.values(filters)])

  useEffect(() => {
    if (!reached) return
    if (loading) return

    setPage(page => page + 1)
  }, [reached, loading])

  useEffect(() => {
    if (payload == null) return
    const mappedPayload = mapLotsLists(payload)
    console.log(mappedPayload)

    setLots(lots => [...lots, ...mappedPayload.items])
    setTimeout(() => resetReached())
  }, [payload])

  console.log(lots)
  return (
    <Previews>
      {lots.map(lot => (
        <LotPreview {...lot} key={lot.id} />
      ))}
      {loading && <LoaderCover absolute />}
    </Previews>
  )

  return null
}

export default LotPreviewsContainer
