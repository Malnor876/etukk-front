import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Specifications from "app/components/UI/Specifications/Specifications"
import { LotInfoType } from "domain/Lot/types"

import { lotNewStorage } from "."

function EditLotSpecifications() {
  const [specifications, setSpecifications] = lotNewStorage.state<LotInfoType["specifications"]>("specifications", [{ key: "", value: "" }])
  return (
    <section>
      <h4>Укажите характеристики</h4>
      <p>*не более 10 характеристик</p>
      {/* <QueryContainer action={}>
        {payload => (

        )}
      </QueryContainer> */}
      <Specifications max={10} defaultValue={specifications} onChange={setSpecifications} />
    </section>
  )
}

export default EditLotSpecifications