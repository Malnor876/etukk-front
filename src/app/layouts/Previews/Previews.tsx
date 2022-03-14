import "./Previews.scss"

import { ReactNode } from "react"

interface PreviewsProps {
  children: ReactNode[]
}

function Previews(props: PreviewsProps) {
  return (
    <div className="previews">{props.children}</div>
  )
}

export default Previews
