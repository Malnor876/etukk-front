import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Buttons from "app/layouts/Buttons/Buttons"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import useLocalStorage from "hooks/useLocalStorage"
import { useModal } from "modules/modal/hook"
import { useLayoutEffect } from "react"

interface DialogConfirmBidUpProps {
  onSubmit(): void
}

function DialogConfirmBidUp(props: DialogConfirmBidUpProps) {
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
    <DialogLayout centered>
      <h3>Подтвердите повышение ставки</h3>
      <Checkbox defaultChecked={!shouldRequestConfirm} onChange={onShouldRequestBidConfirm}>Больше не запрашивать подтверждение о повышении ставки</Checkbox>
      <Buttons>
        <Button outline onClick={close}>Отмена</Button>
        <Button onClick={onSubmit}>Поднять</Button>
      </Buttons>
    </DialogLayout>
  )
}

export default DialogConfirmBidUp