import Button from "app/components/UI/Button/Button"
import Icon from "app/components/UI/Icon/Icon"
import Selector from "app/components/UI/Selector/Selector"
import TextareaAttachments from "app/components/UI/Textarea/TextareaAttachments"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"

import DialogReportAccepted from "./DialogReportAccepted"

interface PopupReportProps {
  onSubmit(): void | Promise<unknown>
}

function PopupReport(props: PopupReportProps) {
  const modal = useModal()
  async function onSubmit() {
    await props.onSubmit()

    modal.close()
    Modal.open(DialogReportAccepted, { closable: false })
  }
  return (
    <PopupLayout width="46.25em">
      <form>
        <div>
          <Icon name="attention" size="3.5em" color="red" />
        </div>
        <h2>Пожаловаться</h2>
        <Selector >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Selector>
        <TextareaAttachments placeholder="Введите комментарий ...">
          Кратко опишите причину по которой
          <br />
          Вы решили пожаловаться на объявление
        </TextareaAttachments>
        <div>
          <Button type="submit" await onClick={onSubmit}>Открыть спор по товару</Button>
        </div>
      </form>
    </PopupLayout>
  )
}

export default PopupReport
