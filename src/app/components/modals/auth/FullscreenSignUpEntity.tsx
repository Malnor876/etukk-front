import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { Link } from "react-router-dom"

import FullscreenSignIn from "./FullscreenSignIn"

function FullscreenSignUpEntity() {
  const { close } = useModal()
  const [reCaptcha, setReCaptcha] = useState(false)
  const [validity, setValidity] = useState(false)
  return (
    <FullscreenLayout>
      <h3 className="heading center">Регистрация</h3>
      {/* <SocialAuth /> */}
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())}>
        <Column>
          <Input placeholder="Название организации" name="title" width="20em" required />
          <Input placeholder="ИНН" name="inn" width="20em" required />
          <Input placeholder="Номер телефона" name="phone" width="20em" type="tel" required />
          <Input placeholder="Е-mail" name="email" width="20em" type="email" required />
          <NewPassword width="20em" />
          <Checkbox required>
            <Link to="/terms" onClick={close}>Принимаю условия соглашения</Link>
          </Checkbox>
          <ReCAPTCHA
            sitekey="6Lc5tBgfAAAAAC1ZVB3wW7Srz56N6RQiEufFPVRi"
            onChange={value => setReCaptcha(!!value)}
          />
          <div><Button type="submit" disabled={!validity || !reCaptcha}>Регистрация</Button></div>
        </Column>
      </Form>
      <Button color="white" onClick={() => Modal.replace(FullscreenSignIn)}>Войти</Button>
    </FullscreenLayout>
  )
}

export default FullscreenSignUpEntity
