import Button from "app/components/UI/Button/Button"
import StarRating from "app/components/UI/StarRating/StarRating"
import TextareaAttachments from "app/components/UI/Textarea/TextareaAttachments"
import ToolTipBadge from "app/components/UI/ToolTipBadge/ToolTipBadge"
import You from "app/components/UI/You/You"
import Form, { FormState } from "app/layouts/Form/Form"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { isValidResponse } from "infrastructure/persistence/api/client"
import { postLotReview } from "infrastructure/persistence/api/data/actions"
import { Modal } from "modules/modal/controller"
import { useState } from "react"
import { useClient } from "react-fetching-library"

import DialogReviewAccepted from "./DialogReviewAccepted"

enum FormInputs {
  feedback = "feedback",
  feedbackAttachments = "feedback-attachments", //* NOT FOR USAGE

  rating = "rating",
}

interface PopupReviewProps {
  lotId: number
}

function PopupReview(props: PopupReviewProps) {
  const [pending, setPending] = useState(false)
  const client = useClient()
  async function onSubmit(state: FormState<FormInputs, string>) {
    setPending(true)
    const response = await client.query(postLotReview({
      to_lot_id: props.lotId,
      score: Number(state.values.rating),
      text: state.values.feedback
    }))
    setPending(false)

    if (!isValidResponse(response)) return

    Modal.replace(DialogReviewAccepted, { closable: false })
  }
  return (
    <PopupLayout width="46.25em">
      <Form onSubmit={onSubmit}>
        <h2>Оставить отзыв о товаре</h2>
        <TextareaAttachments name={FormInputs.feedback} rows={8} placeholder="Ваш отзыв...">
          <You />
        </TextareaAttachments>
        <StarRating name={FormInputs.rating}>Ваша оценка</StarRating>
        <div>
          <Button type="submit" pending={pending}>Отправить отзыв</Button>
        </div>
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

export default PopupReview
