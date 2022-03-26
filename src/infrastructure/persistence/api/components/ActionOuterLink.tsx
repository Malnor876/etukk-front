import _ from "lodash"
import { HTMLAttributes } from "react"

import { Action } from "../client.types"
import { endpointTransform } from "../interceptors"

interface ActionOuterLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, "href"> {
  action: Action
}

function ActionOuterLink(props: ActionOuterLinkProps) {
  const href = endpointTransform(props.action)
  return (
    <a {..._.omit(props, "action")} href={href} />
  )
}

export default ActionOuterLink