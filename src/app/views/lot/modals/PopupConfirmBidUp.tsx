import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Buttons from "app/layouts/Buttons/Buttons"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"


export function PopupConfirmBidUp(props: { onSubmit(): void; }) {
  const { close } = useModal()
  function onSubmit() {
    props.onSubmit()
    close()
  }
  return (
    <PopupLayout centered>
      <h3>Подтвердите повышение ставки</h3>
      <Buttons>
        <Button outline onClick={close}>Отмена</Button>
        <Button onClick={onSubmit}>Поднять</Button>
      </Buttons>
      <Checkbox>Больше не запрашивать подтверждение о повышении ставки</Checkbox>
    </PopupLayout>
  )
}
