// import "./FullscreenAuth.scss"

import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form, { FormState } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postRegistrationUser } from "infrastructure/persistence/api/data/actions"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { useState } from "react"
import { useMutation } from "react-fetching-library"
import ReCAPTCHA from "react-google-recaptcha"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import FullscreenEmailConfirm from "./FullscreenEmailConfirm"
import FullscreenSignIn from "./FullscreenSignIn"

enum FormInputs {
  fullName = "fullname",
  email = "email",
  phone = "phonenumber",
  password = "password"
}

function FullscreenSignUpPerson() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const { mutate: signUp } = useMutation(postRegistrationUser)
  const [reCaptcha, setReCaptcha] = useState(false)
  const [validity, setValidity] = useState(false)
  async function onSubmit(state: FormState<FormInputs, string>) {
    const { error, payload } = await signUp({
      ...state.values,
      organization: false
    })

    if (error) return
    if (payload == null) return

    // console.log(payload)
    localStorage.setItem("token", payload.access_token)

    Modal.replace(FullscreenEmailConfirm)
  }
  return (
    <FullscreenLayout className="fullscreen-auth">
      <div className="center">
        <h3 className="heading">Регистрация</h3>
      </div>
      <SocialAuth />
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Column>
          <Input placeholder="Имя" width="20em" name={FormInputs.fullName} required />
          <Input placeholder="Номер телефона" name={FormInputs.phone} width="20em" type="tel" required />
          <Input placeholder="Е-mail" name={FormInputs.email} width="20em" type="email" required autoComplete="username" />
          <NewPassword name={FormInputs.password} width="20em" />
          <ReCAPTCHA
            sitekey="6Lc5tBgfAAAAAC1ZVB3wW7Srz56N6RQiEufFPVRi"
            onChange={value => setReCaptcha(!!value)}
          />
          <Checkbox required>
            <Link to="/terms" onClick={close}>Принимаю условия соглашения</Link>
          </Checkbox>
          <div><Button type="submit" disabled={!validity || !reCaptcha}>Регистрация</Button></div>
        </Column>
      </Form>
      <Button color="white" onClick={() => Modal.replace(FullscreenSignIn)}>Войти</Button>
    </FullscreenLayout>
  )
}

export default FullscreenSignUpPerson
