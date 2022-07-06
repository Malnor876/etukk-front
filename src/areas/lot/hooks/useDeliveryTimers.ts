import { getDeliveryTimers } from "infrastructure/persistence/api/data/actions"
import { useQuery } from "react-fetching-library"

function useDeliveryTimers() {
  const response = useQuery(getDeliveryTimers())

  const fillDeliveryTimer = response.payload?.find(p => p.type === "fill_delivery")?.value ?? 0
  const confirmDeliveryTimer = response.payload?.find(p => p.type === "confirm_delivery")?.value ?? 0
  const confirmShipmentTimer = response.payload?.find(p => p.type === "confirm_shipment")?.value ?? 0

  return {
    fillDeliveryTimer,
    confirmDeliveryTimer,
    confirmShipmentTimer
  }
}

export default useDeliveryTimers
