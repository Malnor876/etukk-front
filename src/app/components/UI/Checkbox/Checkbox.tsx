import "./Checkbox.scss"

import { ChangeEvent, Dispatch, ReactNode } from "react"

import Icon from "../Icon/Icon"

interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: Dispatch<boolean>

  children?: ReactNode
}

function Checkbox(props: CheckboxProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(event.target.checked)
  }
  return (
    <label className="checkbox">
      <input {...props} className="checkbox__input" onChange={onChange} />
      <div className="checkbox__appearance">
        <Icon className="checkbox__icon" name="check" />
      </div>
      {props.children && (
        <div className="checkbox__label">{props.children}</div>
      )}
    </label>
  )
}

export default Checkbox
