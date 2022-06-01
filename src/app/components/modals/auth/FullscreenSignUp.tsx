import "./FullscreenAuth.scss"

import Button from "app/components/UI/Button/Button"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { Modal } from "modules/modal/controller"

import FullscreenSignUpEntity from "./FullscreenSignUpEntity"
import FullscreenSignUpPerson from "./FullscreenSignUpPerson"

function FullscreenSignUp() {
  return (
    <FullscreenLayout className="fullscreen-auth" width="20em">
      <div className="center">
        <h3 className="heading">Регистрация</h3>
        <br />
        <span>Укажите свой статус</span>
      </div>
      <Column>
        <Button outline onClick={() => Modal.replace(FullscreenSignUpPerson)}>Частное лицо</Button>
        <Button outline onClick={() => Modal.replace(FullscreenSignUpEntity)}>Юридическое лицо</Button>
      </Column>
    </FullscreenLayout>
  )
}

export default FullscreenSignUp