import Password from "app/components/containers/Password/Password"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form, { FormState } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postUsersSignin } from "infrastructure/persistence/api/data/actions"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { userUpdate } from "infrastructure/persistence/redux/reducers/user"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { useState } from "react"
import { useMutation } from "react-fetching-library"
import { useDispatch } from "react-redux"

import FullscreenPasswordRecovery from "./FullscreenPasswordRecovery"
import FullscreenSignUp from "./FullscreenSignUp"

enum FormInputs {
  email = "email",
  password = "password"
}

function FullscreenSignIn() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const [validity, setValidity] = useState(false)
  const { mutate: signIn } = useMutation(postUsersSignin)
  async function onSubmit(state: FormState<FormInputs, string>) {
    const { error, payload } = await signIn(state.values)

    if (error) return
    if (payload == null) return

    const mappedUser = mapUser(payload.result)
    dispatch(userUpdate(mappedUser))

    close()
  }
  return (
    <FullscreenLayout>
      <h3 className="heading" style={{ textAlign: "center" }}>ВХОД</h3>
      <SocialAuth />
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Column>
          <Input type="email" name={FormInputs.email} width="20em" placeholder="Е-mail или номер телефона" required />
          <Password name={FormInputs.password} width="20em" />
          <a className="gray" onClick={() => Modal.open(FullscreenPasswordRecovery)}>Забыли пароль?</a>
          <div><Button type="submit" disabled={!validity}>Войти</Button></div>
        </Column>
      </Form>
      <Button color="white" onClick={() => Modal.replace(FullscreenSignUp)}>Регистрация</Button>
    </FullscreenLayout >
  )
}

export default FullscreenSignIn