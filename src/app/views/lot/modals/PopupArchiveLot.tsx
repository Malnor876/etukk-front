import Button from "app/components/UI/Button/Button"
import Buttons from "app/layouts/Buttons/Buttons"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"


export function PopupArchiveLot(props: { onSubmit(): void; }) {
  const { close } = useModal()
  function onSubmit() {
    props.onSubmit()
    close()
  }
  return (
    <PopupLayout centered>
      <h3>Лот будет снят с публикации и перемещен  в папку “АРХИВ”</h3>
      <Buttons>
        <Button outline onClick={close}>Отмена</Button>
        <Button onClick={onSubmit}>Ок</Button>
      </Buttons>
    </PopupLayout>
  )
}
