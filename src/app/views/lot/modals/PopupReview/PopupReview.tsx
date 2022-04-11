import Button from "app/components/UI/Button/Button"
import StarRating from "app/components/UI/StarRating/StarRating"
import TextareaAttachments from "app/components/UI/Textarea/TextareaAttachments"
import ToolTipBadge from "app/components/UI/ToolTipBadge/ToolTipBadge"
import You from "app/components/UI/You/You"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"

import PopupReviewAccepted from "./PopupReviewAccepted"

function PopupReview() {
  const { close } = useModal()
  function onSubmit() {
    // close()
    Modal.open(PopupReviewAccepted)
  }
  return (
    <PopupLayout width="46.25em">
      <h2>Оставить отзыв о товаре</h2>
      <TextareaAttachments rows={8} placeholder="Ваш отзыв...">
        <You />
      </TextareaAttachments>
      <StarRating>Ваша оценка</StarRating>
      <div>
        <Button onClick={onSubmit}>Отправить отзыв</Button>
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
    </PopupLayout>
  )
}

export default PopupReview
