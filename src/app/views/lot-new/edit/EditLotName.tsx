import Input from "app/components/UI/Input/Input"

import { lotNewStorage } from "."

function EditLotName() {
  const [title, setTitle] = lotNewStorage.state("title", "")
  return (
    <section>
      <h4>Название лота</h4>
      <Input defaultValue={title} placeholder="Напишите  назвние лота..." onInput={event => setTitle(event.currentTarget.value)} />
    </section>
  )
}

export default EditLotName