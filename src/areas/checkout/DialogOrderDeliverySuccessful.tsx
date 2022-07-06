import ButtonLink from "app/components/UI/Button/ButtonLink"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import { useModal } from "modules/modal/hook"

function DialogOrderDeliverySuccessful() {
  const modal = useModal()
  return (
    <DialogLayout width="30em" centered>
      <h3 >
        Данные приняты. <br />
        В ближайшее время с вами свяжется представитель службы доставки!
      </h3>
      <ButtonLink outline to="/" onClick={modal.close}>На главную</ButtonLink>
    </DialogLayout>
  )
}

export default DialogOrderDeliverySuccessful