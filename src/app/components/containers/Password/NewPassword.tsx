import Input from "app/components/UI/Input/Input"
import _ from "lodash"
import { useState } from "react"
import { inputValue } from "utils/common"

const PASSWORD_MISMATCH = "Пароли не совпадают!"

interface NewPasswordProps {
  name?: string
  confirmName?: string
  width?: string

  new?: boolean
}

function NewPassword(props: NewPasswordProps) {
  const [hidden, setHidden] = useState(true)
  const [password, setPassword] = useState("")
  const inputProps = {
    type: hidden ? "password" : "text",

    iconName: "eye",
    onIconClick: () => setHidden(!hidden),

    required: true,
    autoComplete: "new-password",
    ..._.omit(props, "nameConfirm"),
  }
  const placeholder = props.new ? "Новый пароль" : "Пароль"
  return (
    <>
      <Input {...inputProps} pattern=".{6,}" placeholder={placeholder} onChange={inputValue(setPassword)} name={props.name} />
      <Input {...inputProps} pattern={password} customValidity={PASSWORD_MISMATCH} placeholder={"Повторите " + placeholder} name={props.confirmName} />
    </>
  )
}

export default NewPassword
