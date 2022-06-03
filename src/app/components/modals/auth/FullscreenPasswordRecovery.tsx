// import "./FullscreenAuth.scss"

import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form, { FormState } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { useModal } from "modules/modal/hook"

enum FormInputs {
  password = "password",
}

interface FullscreenPasswordRecoveryProps {
  recoveryToken: string
}

function FullscreenPasswordRecovery(props: FullscreenPasswordRecoveryProps) {
  const modal = useModal()
  async function onSubmit(state: FormState<FormInputs, string>) {
    // const { error, payload } = await signIn(state.values)

    // if (error) return
    // if (payload == null) return

    modal.close()
  }
  return (
    <FullscreenLayout className="fullscreen-auth">
      <div className="center">
        <h3 className="heading">Восстановление пароля</h3>
        <Form>
          <br />
          <br />
          <NewPassword name={FormInputs.password} width="21.25em" />
          <br />
          <div style={{ display: "grid", margin: "auto", width: "11em" }}><Button disabled>Сохранить</Button></div>
        </Form>
      </div>
    </FullscreenLayout>
  )
}

export default FullscreenPasswordRecovery
