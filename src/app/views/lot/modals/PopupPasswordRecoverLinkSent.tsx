import Button from "app/components/UI/Button/Button"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"


export function PopupPasswordRecoverLinkSent() {
  const { close } = useModal()
  return (
    <PopupLayout centered>
      <h3>Ссылка для смены пароля отправлена на почту</h3>
      <Button onClick={close}>Ок</Button>
    </PopupLayout>
  )
}
