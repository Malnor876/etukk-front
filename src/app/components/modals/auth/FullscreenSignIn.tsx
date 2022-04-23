import Password from "app/components/containers/Password/Password"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import SocialAuth from "app/components/UI/SocialAuth/SocialAuth"
import { Column } from "app/layouts/BaseLayouts/BaseLayouts"
import Form from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { postUsersSignin } from "infrastructure/persistence/api/data/actions"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { updateUser } from "infrastructure/persistence/redux/reducers/user"
import { FormElements } from "interfaces/utilities"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { FormEvent, useState } from "react"
import { useMutation } from "react-fetching-library"
import { useDispatch } from "react-redux"

import FullscreenPasswordRecovery from "./FullscreenPasswordRecovery"
import FullscreenSignUp from "./FullscreenSignUp"

function FullscreenSignIn() {
  const { close } = useModal()
  const dispatch = useDispatch()
  const [validity, setValidity] = useState(false)
  const { mutate: signIn } = useMutation(postUsersSignin)
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const target = event.currentTarget
    const elements = target.elements as FormElements<"email" | "password">

    const { error, payload } = await signIn({
      email: elements.email.value,
      password: elements.password.value
    })

    if (error) return
    if (payload == null) return

    const mappedUser = mapUser(payload.result)
    dispatch(updateUser(mappedUser))

    close()
  }
  return (
    <FullscreenLayout>
      <h3 className="heading" style={{ textAlign: "center" }}>ВХОД</h3>
      <Form centered onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
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