import Button from "app/components/UI/Button/Button"
import Selector from "app/components/UI/Selector/Selector"
import TextareaAttachments from "app/components/UI/Textarea/TextareaAttachments"
import ToolTipBadge from "app/components/UI/ToolTipBadge/ToolTipBadge"
import You from "app/components/UI/You/You"
import Buttons from "app/layouts/Buttons/Buttons"
import Form, { FormState } from "app/layouts/Form/Form"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { Modal } from "modules/modal/controller"

import DialogDisputeAccepted from "./DialogDisputeAccepted"

enum FormInputs {
  reason = "reason",

  feedback = "feedback",
  feedbackAttachments = "feedback-attachments", //* NOT FOR USAGE
}

interface PopupDisputeProps {
  lotId: number
}

function PopupDispute(props: PopupDisputeProps) {
  function onSubmit(state: FormState<FormInputs, string>) {
    Modal.replace(DialogDisputeAccepted)
  }
  return (
    <PopupLayout width="46.25em">
      <Form onSubmit={onSubmit}>
        <h2>Открыть спор по товару</h2>
        <You />
        <Selector name={FormInputs.reason} width="20em">
          <option>Товар пришел с повреждениями</option>
          <option>Не соответствует заявленным характеристикам</option>
          <option>Иная причина</option>
        </Selector>
        <TextareaAttachments name={FormInputs.feedback} rows={5} placeholder="Введите комментарий ..." />
        <Buttons>
          <Button type="submit">Открыть спор</Button>
        </Buttons>
        <ToolTipBadge>
          Для закрытия сделки Вам необходимо оставить отзыв и прикрепить фото полученного лота.
          {"\n\n"}
          Если у Вас есть претензии по качеству товара, откройте спор.
          {"\n"}
          Для этого необходимо выбрать причину открытия, описать проблему и прикрепить фото и видео подтверждающие дефект или несоответствие товара заявленным характеристикам.
          {"\n\n"}
          ВНИМАНИЕ! Открытие спора после остановки счетчиков - невозможно!
        </ToolTipBadge>
      </Form>
    </PopupLayout>
  )
}

export default PopupDispute
