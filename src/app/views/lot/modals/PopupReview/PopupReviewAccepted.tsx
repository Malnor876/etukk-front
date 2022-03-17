import ButtonLink from "app/components/UI/Button/ButtonLink"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"

function PopupReviewAccepted() {
  const { close } = useModal()
  return (
    <PopupLayout centered width="20em">
      <h3>Ваш отзыв отправлен! Вперед за новыми покупками?</h3>
      <ButtonLink to="/" onClick={close}>На главную</ButtonLink>
    </PopupLayout>
  )
}

export default PopupReviewAccepted
