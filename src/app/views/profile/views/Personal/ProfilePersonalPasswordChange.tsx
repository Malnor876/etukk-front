import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Form from "app/layouts/Form/Form"
import { useState } from "react"

function ProfilePersonalPasswordChange() {
  const [validity, setValidity] = useState(false)
  return (
    <>
      <h5 className="heading">Смена пароля</h5>
      <Form gap="2em" onChange={event => setValidity(event.currentTarget.checkValidity())}>
        <NewPassword />
        <div><Button type="submit" disabled={!validity}>Сохранить</Button></div>
      </Form>
    </>
  )
}

export default ProfilePersonalPasswordChange