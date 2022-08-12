import Input from "app/components/UI/Input/Input";
import {inputValue} from "utils/common";

import {lotDraftStorage} from ".";

function EditLotName() {
  const [title, setTitle] = lotDraftStorage.state("title", "");
  function updateTitle(value: string) {
    value = value.trimStart();
    value = value.replace(/ +/g, " ");
    setTitle(value);
  }

  return (
    <section>
      <h4>Название лота</h4>
      <p>*не менее 10 и не более 40 символов</p>
      <p>*название лота должно содержать буквы</p>
      <Input
        width="25em"
        placeholder="Напишите  название лота..."
        value={title}
        onChange={inputValue(updateTitle)}
      />
    </section>
  );
}

export default EditLotName;
