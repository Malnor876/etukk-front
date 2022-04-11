import Button from "app/components/UI/Button/Button"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"


export function PopupBidAccepted() {
  const { close } = useModal()
  return (
    <PopupLayout centered width="25em">
      <h3>Ваша ставка принята</h3>
      <Button onClick={close}>Ок</Button>
    </PopupLayout>
  )
}
