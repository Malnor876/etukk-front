import LoaderCover from "app/components/UI/Loader/LoaderCover"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotPreviewType } from "domain/Lot/types"
import useScrollReach from "hooks/useScrollReach"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"

interface LotPreviewsContainerProps {
  search?: string
  price?: [number, number] // [min, max]
  category?: number[]
  seller?: "all" | "user" | "organization",
  delivery?: "all" | "other_regions" | "only_city"
  period?: {
    date_start: string
    date_end: string
  }
  started?: "started" | "ended" | "waiting"
}

function LotPreviewsContainer(props: LotPreviewsContainerProps) {
  const [page, setPage] = useState(1)
  const [pageSize] = useState(12)

  console.log(props.price)

  // const [lots, setLots] = useState<LotPreviewType[]>([])
  // const response = useQuery(getLots(page, pageSize, props.search, { min: props.price?.[0], max: props.price?.[1] }, props.category?.map(Number), props.seller, props.delivery, props.period, props.started))
  // const { error, loading, payload } = response
  // if (error) throw new QueryError("Error during sending request or handling response.", response)

  // const [reached, resetReached] = useScrollReach(loading || payload?.result.items.length === 0, window.innerHeight / 4)

  // useEffect(() => {
  //   if (page > 1) {
  //     setPage(1)
  //   }
  //   setLots([])
  // }, [props])

  // useEffect(() => {
  //   if (!reached) return
  //   if (loading) return

  //   setPage(page => page + 1)
  // }, [reached, loading])

  // useEffect(() => {
  //   if (payload == null) return
  //   const mappedPayload = mapLotsLists(payload)

  //   setLots(lots => [...lots, ...mappedPayload.items])
  //   setTimeout(() => resetReached())
  // }, [payload])

  // return (
  //   <Previews>
  //     {lots.map(lot => (
  //       <LotPreview {...lot} key={lot.id} />
  //     ))}
  //     {loading && <LoaderCover absolute />}
  //   </Previews>
  // )

  return null
}

export default LotPreviewsContainer
