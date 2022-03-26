import "./Input.scss"

import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from "react"
import { classWithModifiers } from "utils/common"

import Icon, { IconName } from "../Icon/Icon"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: string
  iconName?: IconName
  customValidity?: string
  children?: ReactNode
  onIconClick?(): void
}

function Input(props: InputProps) {
  const [invalid, setInvalid] = useState(props.required ?? false)
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setInvalid(!event.currentTarget.validity.valid)
  }
  return (
    <label className={classWithModifiers("input", invalid && "invalid")} style={{ "--input-width": props.width }}>
      {props.children && (
        <div className="input__label">{props.children}</div>
      )}
      <div className="input__appearance">
        <input {..._.omit(props, "iconName", "customValidity", "children")} className="input__input" onChange={onChange} placeholder={props.placeholder && (props.placeholder + (props.required ? "*" : ""))} />
        <Icon className="input__icon" name={props.iconName} onClick={props.onIconClick} />
      </div>
      {invalid && (
        <span className="input__validity" aria-hidden={!invalid}>{props.customValidity || "Данные введены неверно"}</span>
      )}
    </label>
  )
}

export default Input
