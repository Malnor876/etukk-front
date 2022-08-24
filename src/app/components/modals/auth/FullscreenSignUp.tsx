import "./FullscreenAuth.scss"

import ButtonLink from "app/components/UI/Button/ButtonLink"
import {Column} from "app/layouts/BaseLayouts/BaseLayouts"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import {useModalContext} from "react-modal-global"

function FullscreenSignUp() {
  const {close} = useModalContext()
  return (
    <FullscreenLayout className="fullscreen-auth" width="20em">
      <div className="center">
        <h3 className="heading">Регистрация</h3>
        <br />
        <span>Укажите свой статус</span>
      </div>
      <Column>
        <ButtonLink outline to="/registerPerson" onClick={close}>
          Частное лицо
        </ButtonLink>
        <ButtonLink outline to="/registerEntity" onClick={close}>
          Юридическое лицо
        </ButtonLink>
      </Column>
    </FullscreenLayout>
  )
}

export default FullscreenSignUp
