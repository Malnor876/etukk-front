import Button from "app/components/UI/Button/Button"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import { useModal } from "modules/modal/hook"


export function DialogPasswordRecoverLinkSent() {
  const { close } = useModal()
  return (
    <DialogLayout centered width="27em">
      <h3>Ссылка для смены пароля отправлена на почту</h3>
      <Button onClick={close}>Ок</Button>
    </DialogLayout>
  )
}
