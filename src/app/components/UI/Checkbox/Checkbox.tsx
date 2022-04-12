import "./Checkbox.scss"

import _ from "lodash"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

import Icon from "../Icon/Icon"

export interface CheckboxProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { }

function Checkbox(props: CheckboxProps) {
  return (
    <label className="checkbox">
      <input {..._.omit(props, "children")} type="checkbox" className="checkbox__input" />
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
