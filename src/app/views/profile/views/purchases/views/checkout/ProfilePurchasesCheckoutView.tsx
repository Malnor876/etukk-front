import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import { FormState } from "app/layouts/Form/Form"
import LotCompactLayout from "app/layouts/LotCompactLayout/LotCompactLayout"
import DialogOrderDeliverySuccessful from "areas/checkout/DialogOrderDeliverySuccessful"
import OrderDelivery, { OrderDeliveryFormInputs } from "areas/checkout/OrderDelivery/OrderDelivery"
import LotInfoCompact from "areas/lot/LotInfoCompact/LotInfoCompact"
import useParam from "hooks/useParam"
import { isValidResponse } from "infrastructure/persistence/api/client"
import { getLotByLotId, postLotByLotBuyerApprove, postLotByLotPay } from "infrastructure/persistence/api/data/actions"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"
import { Modal } from "modules/modal/controller"
import { useClient } from "react-fetching-library"

function ProfilePurchasesCheckoutView() {
  const lotId = useParam("lotId", true)
  const client = useClient()
  async function onSubmit(values: FormState<OrderDeliveryFormInputs, string>["values"]) {
    const responseBuyerApprove = await client.query(postLotByLotBuyerApprove(lotId, {
      contact_phone: values.phone,
      delivery_address: values.address,
      shipment_dates: [values.date],
      shipment_times: [values.timeStart + "-" + values.timeEnd]
    }))
    if (!isValidResponse(responseBuyerApprove)) return


    const responsePay = await client.query(postLotByLotPay(lotId))
    if (!isValidResponse(responsePay)) return


    window.open(responsePay.payload.redirect_url)
    Modal.open(DialogOrderDeliverySuccessful)
  }
  return (
    <QueryContainer action={getLotByLotId(lotId)} mapping={mapLot}>
      {payload => (
        <LotCompactLayout>
          <LotInfoCompact image={payload.slides[0]} title={payload.title} seller={payload.seller} />
          <OrderDelivery lot={payload} tax={1030} onSubmit={onSubmit} />
        </LotCompactLayout>
      )}
    </QueryContainer>
  )
}

export default ProfilePurchasesCheckoutView