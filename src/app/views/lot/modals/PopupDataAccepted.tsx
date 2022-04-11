import ButtonLink from "app/components/UI/Button/ButtonLink"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"


export function PopupDataAccepted() {
  const { close } = useModal()
  return (
    <PopupLayout centered width="28em">
      <h3>Данные приняты.<br /> В ближайшее время с вами свяжется представитель службы доставки!</h3>
      <ButtonLink outline to="/" onClick={close}>На главную</ButtonLink>
    </PopupLayout>
  )
}
