import "./FullscreenAuth.scss"

import Password from "app/components/containers/Password/Password"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form, { FormState } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postAuthUser } from "infrastructure/persistence/api/data/actions"
import { userFetch } from "infrastructure/persistence/redux/reducers/user"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { useState } from "react"
import { useClient, useMutation } from "react-fetching-library"
import { useDispatch } from "react-redux"

import FullscreenPasswordRecoveryRequest from "./FullscreenPasswordRecoveryRequest"
import FullscreenSignUp from "./FullscreenSignUp"

enum FormInputs {
  email = "email",
  password = "password"
}

function FullscreenSignIn() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const [validity, setValidity] = useState(false)
  const { mutate: signIn } = useMutation(postAuthUser)
  const client = useClient()
  async function onSubmit(state: FormState<FormInputs, string>) {
    const { error, payload } = await signIn(state.values)

    if (error) return
    if (payload == null) return

    dispatch(userFetch(payload))

    close()
  }

  return (
    <FullscreenLayout className="fullscreen-auth">
      <h3 className="heading" style={{ textAlign: "center" }}>ВХОД</h3>
      <SocialAuth />
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Column>
          <Input name={FormInputs.email} width="20em" placeholder="Е-mail или номер телефона" required />
          <Password name={FormInputs.password} width="20em" />
          <a className="gray" onClick={() => Modal.open(FullscreenPasswordRecoveryRequest)}>Забыли пароль?</a>
          <div><Button type="submit" disabled={!validity}>Войти</Button></div>
        </Column>
      </Form>
      <Button color="white" onClick={() => Modal.replace(FullscreenSignUp)}>Регистрация</Button>
    </FullscreenLayout>
  )
}

export default FullscreenSignIn