import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Buttons from "app/layouts/Buttons/Buttons"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import {isValidResponse} from "infrastructure/persistence/api/client"
import {patchUser} from "infrastructure/persistence/api/data/actions"
import {useLayoutEffect, useState} from "react"
import {useClient} from "react-fetching-library"
import {useModalContext} from "react-modal-global"
import {useLocalStorage} from "react-use"

interface DialogConfirmBidUpProps {
  onSubmit(): void
}

function DialogConfirmBidUp(props: DialogConfirmBidUpProps) {
  const [bidUpConfirm, setBidUpConfirm] = useState(true)
  console.log("bidUpConfirm", bidUpConfirm)
  const client = useClient()
  const modal = useModalContext()
  async function onSubmit() {
    const response = await client.query(
      patchUser({bet_confirmation: bidUpConfirm})
    )

    if (!isValidResponse(response)) return
    props.onSubmit()
    modal.close()
  }
  function onCheckboxChange() {
    setBidUpConfirm(!bidUpConfirm)
  }

  useLayoutEffect(() => {
    if (bidUpConfirm === false) onSubmit()
  }, [])

  return (
    <DialogLayout centered>
      <h3>Подтвердите повышение ставки</h3>
      <Checkbox defaultChecked={!bidUpConfirm} onChange={onCheckboxChange}>
        Больше не запрашивать подтверждение о повышении ставки
      </Checkbox>
      <Buttons>
        <Button outline onClick={close}>
          Отмена
        </Button>
        <Button onClick={onSubmit}>Поднять</Button>
      </Buttons>
    </DialogLayout>
  )
}

export default DialogConfirmBidUp
