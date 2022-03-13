import { HTMLAttributes } from "react"

interface OuterLinkProps extends Exclude<HTMLAttributes<HTMLAnchorElement>, "rel" | "target" | "href"> {
  to: string
  noTarget?: boolean
}

function OuterLink(props: OuterLinkProps) {
  return (
    <a {...props} rel="noopener noreferrer" target={props.noTarget ? undefined : "_blank"} href={props.to} />
  )
}

export default OuterLink
