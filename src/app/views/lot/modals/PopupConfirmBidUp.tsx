import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Buttons from "app/layouts/Buttons/Buttons"
import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { useModal } from "modules/modal/hook"
import { useLayoutEffect } from "react"

interface PopupConfirmBidUpProps {
  onSubmit(): void
}

function PopupConfirmBidUp(props: PopupConfirmBidUpProps) {
  const { close } = useModal()
  function onSubmit() {
    props.onSubmit()
    close()
  }
  function shouldNotRequestBidUpConfirm() {
    const shouldNotRequestConfirm = localStorage.getItem("should-not-request-bid-up-confirm") === "yes"
    localStorage.setItem("should-not-request-bid-up-confirm", shouldNotRequestConfirm ? "no" : "yes")
  }
  const shouldNotRequestConfirm = localStorage.getItem("should-not-request-bid-up-confirm") === "yes"
  useLayoutEffect(() => {
    if (shouldNotRequestConfirm) onSubmit()
  }, [])
  return (
    <PopupLayout centered>
      <h3>Подтвердите повышение ставки</h3>
      <Buttons>
        <Button outline onClick={close}>Отмена</Button>
        <Button onClick={onSubmit}>Поднять</Button>
      </Buttons>
      <Checkbox defaultChecked={shouldNotRequestConfirm} onChange={shouldNotRequestBidUpConfirm}>Больше не запрашивать подтверждение о повышении ставки</Checkbox>
    </PopupLayout>
  )
}

export default PopupConfirmBidUp