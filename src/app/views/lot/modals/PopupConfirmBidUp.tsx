import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Buttons from "app/layouts/Buttons/Buttons"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import useLocalStorage from "hooks/useLocalStorage"
import { useModal } from "modules/modal/hook"
import { useLayoutEffect } from "react"

interface PopupConfirmBidUpProps {
  onSubmit(): void
}

function PopupConfirmBidUp(props: PopupConfirmBidUpProps) {
  const [getConfirm, setConfirm] = useLocalStorage("bid-up-confirm", "yes")
  const { close } = useModal()
  function onSubmit() {
    props.onSubmit()
    close()
  }
  function onShouldRequestBidConfirm() {
    const confirm = getConfirm() === "yes"
    setConfirm(confirm ? "no" : "yes")
  }
  const shouldRequestConfirm = getConfirm() === "yes"
  useLayoutEffect(() => {
    if (shouldRequestConfirm === false) onSubmit()
  }, [])
  return (
    <PopupLayout centered>
      <h3>Подтвердите повышение ставки</h3>
      <Buttons>
        <Button outline onClick={close}>Отмена</Button>
        <Button onClick={onSubmit}>Поднять</Button>
      </Buttons>
      <Checkbox defaultChecked={shouldRequestConfirm} onChange={onShouldRequestBidConfirm}>Больше не запрашивать подтверждение о повышении ставки</Checkbox>
    </PopupLayout>
  )
}

export default PopupConfirmBidUp