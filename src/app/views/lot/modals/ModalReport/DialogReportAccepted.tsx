import ButtonLink from "app/components/UI/Button/ButtonLink"
import DialogLayout from "app/layouts/Modal/DialogLayout/DialogLayout"

function DialogReportAccepted() {
  return (
    <DialogLayout centered>
      <h3>Ваша жалоба принята!</h3>
      <ButtonLink outline to="/">На главную</ButtonLink>
    </DialogLayout>
  )
}

export default DialogReportAccepted
