import ButtonLink from "app/components/UI/Button/ButtonLink"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"


export function PopupDeliveryRequest() {
  const { close } = useModal()
  return (
    <PopupLayout centered>
      <h3>Данные приняты. В ближайшее время с вами свяжется представитель службы доставки!</h3>
      <ButtonLink outline to="/" onClick={close}>На главную</ButtonLink>
    </PopupLayout>
  )
}
