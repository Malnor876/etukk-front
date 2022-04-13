import Password from "app/components/containers/Password/Password"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { Modal } from "modules/modal/controller"
import { useState } from "react"

import FullscreenPasswordRecovery from "./FullscreenPasswordRecovery"
import FullscreenSignUp from "./FullscreenSignUp"

function FullscreenSignIn() {
  const [validity, setValidity] = useState(false)
  return (
    <FullscreenLayout>
      <h3 className="heading" style={{ textAlign: "center" }}>ВХОД</h3>
      <SocialAuth />
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())}>
        <Column>
          <Input type="email" name="email" width="20em" placeholder="Е-mail или номер телефона" required />
          <Password name="password" width="20em" />
          <a className="gray" onClick={() => Modal.open(FullscreenPasswordRecovery)}>Забыли пароль?</a>
          <div><Button type="submit" disabled={!validity}>Войти</Button></div>
        </Column>
      </Form>
      <Button color="white" onClick={() => Modal.replace(FullscreenSignUp)}>Регистрация</Button>
    </FullscreenLayout >
  )
}

export default FullscreenSignIn