import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Specifications from "app/components/UI/Specifications/Specifications"
import { LotInfoType } from "domain/Lot/types"

import { lotNewStorage } from "."

function EditLotSpecifications() {
  const [specifications, setSpecifications] = lotNewStorage.state<LotInfoType["specifications"]>("specifications", [{ id: 0, key: "", value: "" } as never])
  return (
    <section>
      <h4>Укажите характеристики</h4>
      <p>
        Уважаемый пользователь, обращаем Ваше внимание
        на то, что при расширенном описании своего товара
        и его характеристик, у Вас появится конкурентное преимущество для быстрой и выгодной продажи.
      </p>
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