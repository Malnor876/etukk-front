import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Checkbox from "app/components/UI/Checkbox/Checkbox"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postUsersSignup } from "infrastructure/persistence/api/data/actions"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { updateUser } from "infrastructure/persistence/redux/reducers/user"
import { FormElements } from "interfaces/utilities"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { FormEvent, useState } from "react"
import { useMutation } from "react-fetching-library"
import ReCAPTCHA from "react-google-recaptcha"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import FullscreenPhoneConfirm from "./FullscreenPhoneConfirm"
import FullscreenSignIn from "./FullscreenSignIn"

function FullscreenSignUpEntity() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const { mutate: signUp } = useMutation(postUsersSignup)
  const [reCaptcha, setReCaptcha] = useState(false)
  const [validity, setValidity] = useState(false)
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.currentTarget
    const elements = target.elements as FormElements<"name" | "inn" | "email" | "phone" | "password" | "password-confirm">

    const { error, payload } = await signUp({
      name: elements.name.value,
      inn: elements.inn.value,
      email: elements.email.value,
      phone: elements.phone.value,
      password: elements.password.value,
      password_confirm: elements["password-confirm"].value
    })

    if (error) return
    if (payload == null) return

    const mappedUser = mapUser(payload.result)
    dispatch(updateUser(mappedUser))

    Modal.replace(FullscreenPhoneConfirm)
  }
  return (
    <FullscreenLayout>
      <h3 className="heading center">Регистрация</h3>
      {/* <SocialAuth /> */}
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Column>
          <Input placeholder="Название организации" name="name" width="20em" required />
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
    </FullscreenLayout >
  )
}

export default FullscreenSignUpEntity
