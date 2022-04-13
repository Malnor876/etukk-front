import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { Modal } from "modules/modal/controller"
import { FormEvent, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Link } from "react-router-dom"

import FullscreenPhoneConfirm from "./FullscreenPhoneConfirm"
import FullscreenSignIn from "./FullscreenSignIn"

function FullscreenSignUpPerson() {
  const [reCaptcha, setReCaptcha] = useState(false)
  const [validity, setValidity] = useState(false)
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    Modal.replace(FullscreenPhoneConfirm)

  }
  return (
    <FullscreenLayout>
      <div className="center">
        <h3 className="heading">Регистрация</h3>
      </div>
      <SocialAuth />
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Column>
          <Input placeholder="Имя" width="20em" required />
          <Input placeholder="Е-mail" width="20em" type="email" required />
          <Input placeholder="Номер телефона" width="20em" type="tel" required />
          <NewPassword width="20em" />
          <Checkbox required>
            <Link to="/terms">Принимаю условия соглашения</Link>
          </Checkbox>
          <div><Button type="submit" disabled={!validity || !reCaptcha}>Регистрация</Button></div>
        </Column>
      </Form>
      <ReCAPTCHA
        sitekey="6Lc5tBgfAAAAAC1ZVB3wW7Srz56N6RQiEufFPVRi"
        onChange={value => setReCaptcha(!!value)}
      />
      <Button color="white" onClick={() => Modal.replace(FullscreenSignIn)}>Войти</Button>
    </FullscreenLayout>
  )
}

export default FullscreenSignUpPerson
