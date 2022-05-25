import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import { QueryErrorCoverBoundary } from "app/components/containers/QueryErrorCoverBoundary/QueryErrorCoverBoundary"
import LotBidUpMutation from "domain/Lot/LotBidUp"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import { getGetLotsById, postCabinetFavoriteAdd, postCabinetLotsPlaceBet } from "infrastructure/persistence/api/data/actions"
import { mapLotsContentItem } from "infrastructure/persistence/api/mappings/lots"
import { Mutation } from "react-fetching-library"
import { useParams } from "react-router"

function LotView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotView, "lotId is not number")
  }

  return (
    <QueryErrorCoverBoundary>
      <LotContainer id={+lotId} />
    </QueryErrorCoverBoundary>
  )
}


interface LotContainerProps {
  id: number
}

function LotContainer(props: LotContainerProps) {
  return (
    <QueryContainer action={getGetLotsById(props.id)} mapping={mapLotsContentItem}>
      {payload => (
        <div className="lot-info-layout">
          <div className="lot-info-layout__section">
            <Mutation actionCreator={postCabinetFavoriteAdd}>
              {({ mutate }) => (
                <LotInfo {...payload.info} onBookmark={() => mutate({ type: "lots", item: props.id })} />
              )}
            </Mutation>
          </div>
          <div className="lot-info-layout__section">
            <LotTrade {...payload.trade} />
            <LotBidUpMutation {...payload.bid} id={props.id} />
          </div>
        </div>
      )}
    </QueryContainer>
  )
}

export default LotView