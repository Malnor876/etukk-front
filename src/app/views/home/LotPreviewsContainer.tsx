import LoaderCover from "app/components/UI/Loader/LoaderCover"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotPreviewType } from "domain/Lot/types"
import useScrollReach from "hooks/useScrollReach"
import { getGetLots } from "infrastructure/persistence/api/data/actions"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"

interface LotsProps {

}

function LotPreviewsContainer() {
  const [page, setPage] = useState(1)
  const [pageSize] = useState(12)

  const [lots, setLots] = useState<LotPreviewType[]>([])
  const response = useQuery(getGetLots(pageSize, page))
  const { error, loading, payload } = response
  if (error) throw new QueryError("Error during sending request or handling response.", response)

  const [reached, resetReached] = useScrollReach(loading, window.innerHeight / 4)

  useEffect(() => {
    if (!reached) return
    if (loading) return

    setPage(page => page + 1)
  }, [reached, loading])

  useEffect(() => {
    if (payload == null) return
    const mappedPayload = mapLotsLists(payload)

    setLots(lots => [...lots, ...mappedPayload.items])
    setTimeout(() => resetReached())
  }, [payload])

  return (
    <Previews>
      {lots.map(lot => (
        <LotPreview {...lot} key={lot.id} />
      ))}
      {loading && <LoaderCover absolute />}
    </Previews>
  )
}

export default LotPreviewsContainer
