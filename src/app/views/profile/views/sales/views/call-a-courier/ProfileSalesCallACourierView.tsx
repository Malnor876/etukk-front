import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import LotCompactLayout from "app/layouts/LotCompactLayout/LotCompactLayout"
import CallACourier from "areas/checkout/CallACourier/CallACourier"
import LotInfoCompact from "areas/lot/LotInfoCompact/LotInfoCompact"
import useParam from "hooks/useParam"
import { getLotByLotId } from "infrastructure/persistence/api/data/actions"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"

function ProfileSalesCallACourierView() {
  const lotId = useParam("lotId", true)

  return (
    <QueryContainer action={getLotByLotId(lotId)} mapping={mapLot}>
      {payload => (
        <LotCompactLayout>
          <LotInfoCompact image={payload.slides[0]} title={payload.title} seller={payload.seller} />
          <CallACourier />
        </LotCompactLayout>
      )}
    </QueryContainer>
  )
}

export default ProfileSalesCallACourierView