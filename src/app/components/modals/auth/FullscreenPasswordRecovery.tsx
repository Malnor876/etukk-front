import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form from "app/layouts/Form/Form"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"

function FullscreenPasswordRecovery() {
  return (
    <FullscreenLayout>
      <div className="center">
        <h3 className="heading">Восстановление пароля</h3>
        <Form>
          <br />
          <br />
          <Input placeholder="Е-mail" width="21.25em" />
          <br />
          <div style={{ display: "grid", margin: "auto", width: "11em" }}><Button disabled>Регистрация</Button></div>
        </Form>
      </div>
    </FullscreenLayout>
  )
}

export default FullscreenPasswordRecovery
