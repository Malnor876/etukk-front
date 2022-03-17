import Button from "app/components/UI/Button/Button"
import Icon from "app/components/UI/Icon/Icon"
import Selector from "app/components/UI/Selector/Selector"
import TextareaAttachments from "app/components/UI/Textarea/TextareaAttachments"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"

import PopupReportAccepted from "./PopupReportAccepted"

function PopupReport() {
  const { close } = useModal()
  function onSubmit() {
    close()
    Modal.open(PopupReportAccepted)
  }
  return (
    <PopupLayout width="40em">
      <form>
        <Icon name="attention" size="3.5em" />
        <h2>Пожаловаться</h2>
        <Selector width="25em">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Selector>
        <TextareaAttachments placeholder="Введите комментарий ...">
          Кратко опишите причину по которой Вы решили пожаловаться на объявление
        </TextareaAttachments>
        <div>
          <Button type="submit" onClick={onSubmit}>Открыть спор по товару</Button>
        </div>
      </form>
    </PopupLayout>
  )
}

export default PopupReport
