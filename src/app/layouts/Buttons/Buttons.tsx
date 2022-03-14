import "./Buttons.scss"

import { ReactNode } from "react"

interface ButtonsProps {
  children: ReactNode
}

function Buttons(props: ButtonsProps) {
  return (
    <div className="buttons">{props.children}</div>
  )
}

export default Buttons
