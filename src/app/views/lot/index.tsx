import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import { QueryErrorCoverBoundary } from "app/components/containers/QueryErrorCoverBoundary/QueryErrorCoverBoundary"
import LotInfoLayout from "areas/lot/LotInfoLayout/LotInfoLayout"
import useParam from "hooks/useParam"
import { getLotByLotId } from "infrastructure/persistence/api/data/actions"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"
import { Helmet } from "react-helmet"


function LotView() {
  const lotId = useParam("lotId", true)

  return (
    <div className="lot-view">
      <Helmet>
        <title>Просмотр лота | etukk.ru</title>
      </Helmet>
      <QueryErrorCoverBoundary>
        <QueryContainer action={getLotByLotId(lotId)} mapping={mapLot}>
          {payload => (
            <LotInfoLayout {...payload} />
          )}
        </QueryContainer>
      </QueryErrorCoverBoundary>
    </div>
  )
}

export default LotView