import "./Buttons.scss"

import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface ButtonsProps {
  children: ReactNode
  centered?: boolean
}

function Buttons(props: ButtonsProps) {
  return (
    <div className={classWithModifiers("buttons", props.centered && "centered")}>{props.children}</div>
  )
}

export default Buttons
