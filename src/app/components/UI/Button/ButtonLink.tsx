import "./Button.scss"

import { MouseEventHandler } from "react"
import { NavLink } from "react-router-dom"
import { classMerge, classWithModifiers } from "utils/common"

import { ButtonBaseProps } from "./Button.types"

interface ButtonLinkProps extends ButtonBaseProps {
  to: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function ButtonLink(props: ButtonLinkProps) {
  const modifiers: string[] = []
  if (props.color) modifiers.push(props.color)
  if (props.small) modifiers.push("small")
  if (props.outline) modifiers.push("outline")
  return (
    <NavLink className={link => classMerge(classWithModifiers("button", ...modifiers, !link.isActive && "gray"), props.className)} to={props.to} onClick={props.onClick}>
      {props.iconLeft && (
        <div className="button__icon">{props.iconLeft}</div>
      )}
      <div className="button__text">{props.children}</div>
      {props.iconRight && (
        <div className="button__icon">{props.iconRight}</div>
      )}
    </NavLink>
  )
}

export default ButtonLink
