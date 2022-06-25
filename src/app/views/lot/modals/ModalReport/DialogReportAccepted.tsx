import ButtonLink from "app/components/UI/Button/ButtonLink"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"
import { useModal } from "modules/modal/hook"

function DialogReportAccepted() {
  const modal = useModal()
  return (
    <DialogLayout centered>
      <h3>Ваша жалоба принята!</h3>
      <ButtonLink outline to="/" onClick={modal.close}>На главную</ButtonLink>
    </DialogLayout>
  )
}

export default DialogReportAccepted
