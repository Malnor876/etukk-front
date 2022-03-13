import { ReactNode } from "react"

type ButtonSize = "small"
type ButtonStyle = "outline"
type ButtonColor = "white" | "gray"

export interface ButtonBaseProps {
  modifiers?: `${ButtonSize} ${ButtonStyle} ${ButtonColor}` | `${ButtonSize} ${ButtonColor}` | `${ButtonStyle} ${ButtonColor}` | ButtonColor | ButtonStyle

  className?: string

  iconLeft?: ReactNode
  iconRight?: ReactNode

  children: ReactNode
}
