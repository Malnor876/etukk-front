import Textarea from "app/components/UI/Textarea/Textarea"
import { inputValue } from "utils/common"

import { lotNewStorage } from "."

function EditLotDescription() {
  const [description, setDescription] = lotNewStorage.state("description", "")
  return (
    <section>
      <h4>Описание лота</h4>
      <p>
        В описании необходимо отразить состояние лота, продолжительность владения, наличие нюансов и
        дефектов, габаритные размеры при междугородней доставке
      </p>
      <Textarea placeholder="Описание..." defaultValue={description} onInput={inputValue(setDescription)}>Расскажите подробнее о выставляемом лоте</Textarea>
    </section>
  )
}

export default EditLotDescription