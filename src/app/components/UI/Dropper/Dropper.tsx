import "./Dropper.scss"

import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

import Icon from "../Icon/Icon"

interface DropperProps {
  active?: boolean
  amount: string | number
  children: ReactNode
  onClick?(): void
}

function Dropper(props: DropperProps) {
  return (
    <button className={classWithModifiers("dropper", props.active && "active")} type="button" onClick={props.onClick}>
      <div className="dropper__text">{props.children}</div>
      <div className="dropper__side">
        <div className="dropper__amount">{props.amount}</div>
        <Icon className="dropper__icon" name="chevron" />
      </div>
    </button>
  )
}

export default Dropper
