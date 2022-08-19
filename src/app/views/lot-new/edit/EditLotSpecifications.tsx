import Specifications, {
  DEFAULT_SPECIFICATIONS,
  SpecificationType,
} from "areas/lot/components/Specifications/Specifications"
import {LotInfoType} from "areas/lot/types"

import {lotDraftStorage} from "."

function EditLotSpecifications() {
  const [specifications, setSpecifications] =
    lotDraftStorage.state<LotInfoType["specifications"]>("specifications")

  const updateSpecifications = (specifications: SpecificationType[]) => {
    const uniqArr = [...DEFAULT_SPECIFICATIONS]
    if (Array.isArray(DEFAULT_SPECIFICATIONS)) {
      DEFAULT_SPECIFICATIONS?.forEach((item, index) => {
        specifications?.forEach(s => {
          if (item.id === s.id) {
            uniqArr[index] = s
          }
        })
      })
    }
    return uniqArr
  }

  return (
    <section>
      <h4>Укажите характеристики</h4>
      <p>
        Уважаемый пользователь, обращаем Ваше внимание на то, что при
        расширенном описании своего товара и его характеристик, у Вас появится
        конкурентное преимущество для быстрой и выгодной продажи.
      </p>
      <p>*не более 10 характеристик</p>
      <Specifications
        max={10}
        defaultValue={updateSpecifications(specifications)}
        onChange={setSpecifications}
      />
    </section>
  )
}

export default EditLotSpecifications
