import "./Input.scss"

import { DetailedHTMLProps, FormEvent, InputHTMLAttributes, useState } from "react"
import { classWithModifiers } from "utils/common"

import Icon, { IconName } from "../Icon/Icon"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  iconName?: IconName
  customValidity?: string

  onIconClick?(): void
}

function Input(props: InputProps) {
  const [invalid, setInvalid] = useState(false)
  function onInvalid(event: FormEvent<HTMLInputElement>) {
    setInvalid(event.currentTarget.validity.valid)
  }
  return (
    <label className={classWithModifiers("input", invalid && "invalid")}>
      <div className="input__appearance">
        <input {...{ ...props, iconName: undefined, customValidity: undefined }} className="input__input" onInvalid={onInvalid} placeholder={props.placeholder + (props.required ? "*" : "")} />
        <Icon className="input__icon" name={props.iconName} onClick={props.onIconClick} />
      </div>
      <span className="input__validity" aria-hidden={!invalid}>{props.customValidity || "Данные введены неверно"}</span>
    </label>
  )
}

export default Input
