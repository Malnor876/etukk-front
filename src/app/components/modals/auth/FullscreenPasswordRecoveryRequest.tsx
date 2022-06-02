import "./FullscreenAuth.scss"

import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form, { FormState } from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"

enum FormInputs {
  email = "email",
}

function FullscreenPasswordRecoveryRequest() {
  async function onSubmit(state: FormState<FormInputs, string>) {
    // const { error, payload } = await signIn(state.values)

    // if (error) return
    // if (payload == null) return

    // close()
  }
  return (
    <FullscreenLayout className="fullscreen-auth">
      <div className="center">
        <h3 className="heading">Восстановление пароля</h3>
        <Form>
          <br />
          <br />
          <Input type="email" placeholder="Е-mail" width="21.25em" />
          <br />
          <div style={{ display: "grid", margin: "auto", width: "11em" }}><Button disabled>Восстановить</Button></div>
        </Form>
      </div>
    </FullscreenLayout>
  )
}

export default FullscreenPasswordRecoveryRequest
