import ButtonLink from "app/components/UI/Button/ButtonLink"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import { useModal } from "modules/modal/hook"


export function DialogDeliveryRequest() {
  const { close } = useModal()
  return (
    <DialogLayout centered width="25em">
      <h3>Данные приняты.<br /> В ближайшее время с вами свяжется представитель службы доставки!</h3>
      <ButtonLink outline to="/" onClick={close}>На главную</ButtonLink>
    </DialogLayout>
  )
}
