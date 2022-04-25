import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form, { FormStateEnum } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postUsersSignup } from "infrastructure/persistence/api/data/actions"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { updateUser } from "infrastructure/persistence/redux/reducers/user"
import { ValuesOf } from "interfaces/utilities"
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
  phone = "phone",
  password = "password",
  passwordConfirm = "password_confirm"
}
type FormValues = Record<ValuesOf<typeof FormInputs>, string>

function FullscreenSignUpPerson() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const { mutate: signUp } = useMutation(postUsersSignup)
  const [reCaptcha, setReCaptcha] = useState(false)
  const [validity, setValidity] = useState(false)
  async function onSubmit(state: FormStateEnum<typeof FormInputs, FormValues>) {
    const { error, payload } = await signUp(state.values)

    if (error) return
    if (payload == null) return

    const mappedUser = mapUser(payload.result)
    dispatch(updateUser(mappedUser))

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
          <Input placeholder="Имя" width="20em" name={FormInputs.name} required />
          <Input placeholder="ИНН" name={FormInputs.inn} width="20em" required />
          <Input placeholder="Номер телефона" name={FormInputs.phone} width="20em" type="tel" required />
          <Input placeholder="Е-mail" name={FormInputs.email} width="20em" type="email" required autoComplete="username" />
          <NewPassword name={FormInputs.password} nameConfirm={FormInputs.passwordConfirm} width="20em" />
          <Checkbox required>
            <Link to="/terms" onClick={close}>Принимаю условия соглашения</Link>
          </Checkbox>
          <div><Button type="submit" disabled={!validity || !reCaptcha}>Регистрация</Button></div>
        </Column>
      </Form>
      <ReCAPTCHA
        sitekey="6Lc5tBgfAAAAAC1ZVB3wW7Srz56N6RQiEufFPVRi"
        onChange={value => setReCaptcha(!!value)}
      />
      <Button color="white" onClick={() => Modal.replace(FullscreenSignIn)}>Войти</Button>
    </FullscreenLayout >
  )
}

export default FullscreenSignUpPerson
