import ButtonLink from "app/components/UI/Button/ButtonLink"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"

function PopupReportAccepted() {
  return (
    <PopupLayout centered>
      <h3>Ваша жалоба принята!</h3>
      <ButtonLink outline to="/">На главную</ButtonLink>
    </PopupLayout>
  )
}

export default PopupReportAccepted
