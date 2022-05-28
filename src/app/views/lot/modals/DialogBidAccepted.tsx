import Button from "app/components/UI/Button/Button"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import { useModal } from "modules/modal/hook"


export function DialogBidAccepted() {
  const { close } = useModal()
  return (
    <DialogLayout centered width="25em">
      <h3>Ваша ставка принята</h3>
      <Button onClick={close}>Ок</Button>
    </DialogLayout>
  )
}
