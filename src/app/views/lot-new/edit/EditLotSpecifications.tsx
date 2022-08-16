import Specifications, {
  DEFAULT_SPECIFICATIONS,
  SpecificationType,
} from "areas/lot/components/Specifications/Specifications"
import {LotInfoType} from "areas/lot/types"

import {lotDraftStorage} from "."

function EditLotSpecifications() {
  const [specifications, setSpecifications] =
    lotDraftStorage.state<LotInfoType["specifications"]>("specifications")
  console.log("specifications1", specifications)

  const updateSpecifications = (specifications: SpecificationType[]) => {
    const uniqArr = [...DEFAULT_SPECIFICATIONS]
    DEFAULT_SPECIFICATIONS.forEach(item => {
      specifications.forEach(s => {
        if (s.id && item.id === s.id) {
          console.log("s.id", s.id)
          uniqArr[s.id] = s
        }
      })
    })
    console.log("uniqArr", uniqArr)

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
      <p>*максимальный размер упакованного товара не должен превышать 1,5м</p>
      <Specifications
        max={10}
        // defaultValue={specifications?.length > 4 ? specifications : undefined}
        defaultValue={updateSpecifications(specifications)}
        onChange={setSpecifications}
      />
    </section>
  )
}

export default EditLotSpecifications
