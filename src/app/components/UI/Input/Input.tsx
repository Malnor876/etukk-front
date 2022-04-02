import "./Input.scss"

import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from "react"
import { classWithModifiers } from "utils/common"

import Icon, { IconName } from "../Icon/Icon"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: string
  iconName?: IconName
  validity?: boolean
  customValidity?: string
  children?: ReactNode
  onIconClick?(): void
}

function Input(props: InputProps) {
  const [invalid, setInvalid] = useState(false)
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(event)
    setInvalid(!event.currentTarget.checkValidity())
  }
  return (
    <label className={classWithModifiers("input", invalid && "invalid")} style={{ "--input-width": props.width }}>
      {props.children && (
        <div className="input__label">{props.children}</div>
      )}
      <div className="input__appearance">
        <input {..._.omit(props, "iconName", "customValidity", "children", "onIconClick")} className="input__input" onChange={onChange} placeholder={props.placeholder && (props.placeholder + (props.required ? "*" : ""))} />
        <Icon className={classWithModifiers("input__icon", !!props.onIconClick && "clickable")} name={props.iconName} onClick={props.onIconClick} />
      </div>
      {props.validity && (
        <span className={classWithModifiers("input__validity", invalid && "active")} aria-hidden={!invalid}>{props.customValidity || "Данные введены неверно"}</span>
      )}
    </label>
  )
}

export default Input
