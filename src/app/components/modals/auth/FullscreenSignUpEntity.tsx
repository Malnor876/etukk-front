import "./FullscreenAuth.scss"

import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Input from "app/components/UI/Input/Input"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form, { FormState } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postRegistrationUser } from "infrastructure/persistence/api/data/actions"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { userUpdate } from "infrastructure/persistence/redux/reducers/user"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { useState } from "react"
import { useMutation } from "react-fetching-library"
import ReCAPTCHA from "react-google-recaptcha"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import FullscreenPhoneConfirm from "./FullscreenPhoneConfirm"
import FullscreenSignIn from "./FullscreenSignIn"

enum FormInputs {
  name = "name",
  inn = "inn",
  email = "email",
  phone = "phonenumber",
  password = "password",
  passwordConfirm = "password_confirm"
}

function FullscreenSignUpEntity() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const { mutate: signUp } = useMutation(postRegistrationUser)
  const [reCaptcha, setReCaptcha] = useState(false)
  const [validity, setValidity] = useState(false)
  async function onSubmit(state: FormState<FormInputs, string>) {
    // const { error, payload } = await signUp(state.values)

    // if (error) return
    // if (payload == null) return

    // const mappedUser = mapUser(payload.result)
    // dispatch(userUpdate(mappedUser))

    // Modal.replace(FullscreenPhoneConfirm)
  }
  return (
    <FullscreenLayout className="fullscreen-auth">
      <h3 className="heading center">Регистрация</h3>
      {/* <SocialAuth /> */}
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Column>
          <Input placeholder="Название организации" name={FormInputs.name} width="20em" required />
          <Input placeholder="ИНН" name={FormInputs.inn} width="20em" required />
          <Input placeholder="Номер телефона" name={FormInputs.phone} width="20em" type="tel" required />
          <Input placeholder="Е-mail" name={FormInputs.email} width="20em" type="email" required autoComplete="username" />
          <NewPassword name={FormInputs.password} confirmName={FormInputs.passwordConfirm} width="20em" />
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
    </FullscreenLayout >
  )
}

export default FullscreenSignUpEntity
