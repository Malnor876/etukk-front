import Specifications, {
  DEFAULT_SPECIFICATIONS,
  SpecificationType,
} from "areas/lot/components/Specifications/Specifications"
import {LotInfoType} from "areas/lot/types"

import {lotDraftStorage} from "."

function EditLotSpecifications() {
  const [specifications, setSpecifications] =
    lotDraftStorage.state<LotInfoType["specifications"]>("specifications")

  // const updateSpecifications = (specifications: SpecificationType[]) => {
  //   const uniqArr = [...DEFAULT_SPECIFICATIONS]
  //   console.log("DEFAULT_SPECIFICATIONS", Array.isArray(DEFAULT_SPECIFICATIONS))
  //   DEFAULT_SPECIFICATIONS &&
  //     DEFAULT_SPECIFICATIONS.forEach((item, index) => {
  //       specifications.forEach(s => {
  //         if (item.id === s.id) {
  //           uniqArr[index] = s
  //         }
  //       })
  //     })
  //   return uniqArr
  // }

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
        defaultValue={specifications}
        onChange={setSpecifications}
      />
    </section>
  )
}

export default EditLotSpecifications
