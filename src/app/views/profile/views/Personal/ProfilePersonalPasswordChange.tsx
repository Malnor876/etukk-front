import NewPassword from "app/components/containers/Password/NewPassword"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Form, { FormState } from "app/layouts/Form/Form"
import { postCabinetUsersPassword } from "infrastructure/persistence/api/data/actions"
import { useState } from "react"
import { useMutation } from "react-fetching-library"

enum FormInputs {
  passwordOld = "password_old",
  password = "password",
  passwordConfirm = "password_confirm"
}

function ProfilePersonalPasswordChange() {
  const [validity, setValidity] = useState(false)
  const { mutate } = useMutation(postCabinetUsersPassword)
  async function onSubmit(state: FormState<FormInputs, string>) {
    const { error } = await mutate(state.values)
    if (error) return


  }
  return (
    <>
      <h5 className="heading">Смена пароля</h5>
      <Form gap="2em" onChange={event => setValidity(event.currentTarget.checkValidity())} onSubmit={onSubmit}>
        <Input name={FormInputs.passwordOld} placeholder="Текущий пароль" />
        <NewPassword name={FormInputs.password} confirmName={FormInputs.passwordConfirm} />
        <div><Button type="submit" disabled={!validity}>Сохранить</Button></div>
      </Form>
    </>
  )
}

export default ProfilePersonalPasswordChange