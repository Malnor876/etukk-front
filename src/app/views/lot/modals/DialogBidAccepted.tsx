import Button from "app/components/UI/Button/Button"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import { useModal } from "modules/modal/hook"


function DialogBidAccepted() {
  const { close } = useModal()
  return (
    <DialogLayout centered width="25em">
      <h3>Ваша ставка принята</h3>
      <Button onClick={close}>Ок</Button>
    </DialogLayout>
  )
}

export default DialogBidAccepted

export function DialogError() {
  const { close } = useModal()
  return (
    <DialogLayout centered width="25em">
      <h3>Произошла ошибка</h3>
      <Button onClick={close}>Ок!</Button>
    </DialogLayout>
  )
}
