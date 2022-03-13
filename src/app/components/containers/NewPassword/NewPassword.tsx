import Input from "app/components/UI/Input/Input"
import { FormEvent, useState } from "react"

const PASSWORD_MISMATCH = "Пароли не совпадают!"

function NewPassword() {
  const [hidden, setHidden] = useState(true)
  const [password, setPassword] = useState("")
  const inputProps = {
    type: hidden ? "password" : "text",
    onChange: (event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value),

    iconName: "eye",
    onIconClick: () => setHidden(!hidden),

    customValidity: PASSWORD_MISMATCH
  }
  return (
    <>
      <Input {...inputProps} />
      <Input {...inputProps} autoComplete="off" pattern={password} />
    </>
  )
}

export default NewPassword
