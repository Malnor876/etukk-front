import "./BaseLayouts.scss"

import { ReactNode } from "react"

interface BaseLayoutProps {
  children: ReactNode
}


export function Row(props: BaseLayoutProps) {
  return (
    <div className="row">{props.children}</div>
  )
}

export function Column(props: BaseLayoutProps) {
  return (
    <div className="column">{props.children}</div>
  )
}
