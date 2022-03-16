import "./Checkbox.scss"

import _ from "lodash"
import { ChangeEvent, ReactNode } from "react"

import Icon from "../Icon/Icon"

export interface CheckboxProps {
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  onChange?(checked: boolean, name: string): void

  children?: ReactNode
}

function Checkbox(props: CheckboxProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    props.onChange?.(event.currentTarget.checked, event.currentTarget.name)
  }
  return (
    <label className="checkbox">
      <input {..._.omit(props, "children")} type="checkbox" className="checkbox__input" onChange={onChange} />
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
