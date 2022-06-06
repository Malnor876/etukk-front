import Input from "app/components/UI/Input/Input"

import { lotDraftStorage } from "."

function EditLotName() {
  const [title, setTitle] = lotDraftStorage.state("title", "")
  return (
    <section>
      <h4>Название лота</h4>
      <p>*не более 40 символов</p>
      <Input defaultValue={title} placeholder="Напишите  название лота..." onInput={event => setTitle(event.currentTarget.value)} />
    </section>
  )
}

export default EditLotName