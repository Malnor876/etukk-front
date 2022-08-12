import "./Input.scss"

import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, ReactNode, useId, useRef, useState } from "react"
import { classWithModifiers, isDictionary } from "utils/common"
import { PhoneNumber } from "utils/extensions"

import Icon, { IconName } from "../Icon/Icon"

export type InputConstraint = [RegExp | string, string]

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  width?: string
  iconName?: IconName
  validity?: boolean
  customValidity?: string
  children?: ReactNode
  constraints?: InputConstraint[]
  dataList?: Record<string | number, string | number> | (string | number)[]
  onIconClick?(): void
}

function Input(props: InputProps) {
  const id = useId()

  const [invalid, setInvalid] = useState(false)
  const prevValue = useRef<string>("")
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget

    if (props.type !== "tel" && props.maxLength) {
      target.value = target.value.slice(0, props.maxLength)
    }

    if (props.type === "tel") {
      const phoneNumber = new PhoneNumber(target.value)
      if (phoneNumber.length > (props.maxLength ?? Infinity)) {
        console.log(phoneNumber.length, props.maxLength ?? Infinity)
        target.value = prevValue.current
        return
      }
      target.value = phoneNumber.format()
      prevValue.current = target.value
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
  const dataListId = `${id}-datalist`
  return (
    <label className={classWithModifiers("input", invalid && "invalid")} style={{ "--input-width": props.width }}>
      {props.children && (
        <div className="input__label">{props.children}</div>
      )}
      <div className="input__appearance">
        <input {..._.omit(props, "iconName", "customValidity", "children", "onIconClick", "dataList")} list={dataListId} maxLength={props.type === "tel" ? undefined : props.maxLength} pattern={pattern} className="input__input" onChange={onChange} placeholder={props.placeholder && (props.placeholder + (props.required ? "*" : ""))} />
        {props.iconName && (
          <Icon className={classWithModifiers("input__icon", !!props.onIconClick && "clickable")} name={props.iconName} onClick={props.onIconClick} />
        )}
      </div>
      {props.validity && (
        <span className={classWithModifiers("input__validity", invalid && "active")} aria-hidden={!invalid}>{props.customValidity || "Данные введены неверно"}</span>
      )}

      <datalist id={dataListId}>
        {props.dataList instanceof Array && (
          props.dataList.map((value, index) => (
            <option value={value.toString()} key={index} />
          ))
        )}

        {isDictionary(props.dataList) && (
          Object.entries(props.dataList).map(([key, value], index) => (
            <option value={value.toString()} key={index}>{key}</option>
          ))
        )}
      </datalist>
    </label>
  )
}

export default Input
