import "./Input.scss"

import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState } from "react"
import { classWithModifiers } from "utils/common"
import { Phone } from "utils/extensions"

import Icon, { IconName } from "../Icon/Icon"

export type InputConstraint = [RegExp | string, string]

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: string
  iconName?: IconName
  validity?: boolean
  customValidity?: string
  children?: ReactNode
  constraints?: InputConstraint[]
  onIconClick?(): void
}

function Input(props: InputProps) {
  const [invalid, setInvalid] = useState(false)
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget
    if (props.type === "tel") {
      target.value = Phone.parse(target.value).format()
    }

    if (props.constraints) {
      target.setCustomValidity("")
      for (const [constraint, errorMessage] of props.constraints) {
        if (constraint instanceof RegExp) {
          if (!constraint.test(target.value)) {
            target.setCustomValidity(errorMessage)
            break
          }
        } else {
          if (constraint !== target.value) {
            target.setCustomValidity(errorMessage)
            break
          }
        }
      }
    }


    const invalid = !target.checkValidity()
    if (invalid && target.validationMessage === "") {
      target.setCustomValidity(props.customValidity || "")
    }
    setInvalid(invalid)

    props.onChange?.(event)
  }

  const pattern = props.pattern || (props.type === "datetime-local" ? "[0-9]{2}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" : undefined)
  return (
    <label className={classWithModifiers("input", invalid && "invalid")} style={{ "--input-width": props.width }}>
      {props.children && (
        <div className="input__label">{props.children}</div>
      )}
      <div className="input__appearance">
        <input {..._.omit(props, "iconName", "customValidity", "children", "onIconClick")} pattern={pattern} className="input__input" onChange={onChange} placeholder={props.placeholder && (props.placeholder + (props.required ? "*" : ""))} />
        <Icon className={classWithModifiers("input__icon", !!props.onIconClick && "clickable")} name={props.iconName} onClick={props.onIconClick} />
      </div>
      {props.validity && (
        <span className={classWithModifiers("input__validity", invalid && "active")} aria-hidden={!invalid}>{props.customValidity || "Данные введены неверно"}</span>
      )}
    </label>
  )
}

export default Input
