import Input from "app/components/UI/Input/Input"
import { useState } from "react"
import { inputValue } from "utils/common"

const PASSWORD_MISMATCH = "Пароли не совпадают!"

interface NewPasswordProps {
  width?: string
}

function NewPassword(props: NewPasswordProps) {
  const [hidden, setHidden] = useState(true)
  const [password, setPassword] = useState("")
  const inputProps = {
    type: hidden ? "password" : "text",

    iconName: "eye",
    onIconClick: () => setHidden(!hidden),

    required: true,
    ...props
  }
  return (
    <>
      <Input {...inputProps} pattern=".{6,}" placeholder="Пароль" onChange={inputValue(setPassword)} name="password" autoComplete="new-password" />
      <Input {...inputProps} pattern={password} customValidity={PASSWORD_MISMATCH} placeholder="Повторите пароль" name="password-confirm" autoComplete="new-password" />
    </>
  )
}

export default NewPassword
