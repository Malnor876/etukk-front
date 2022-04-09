import "./ErrorCover.scss"

import { ReactNode } from "react"

interface ErrorCoverProps {
  children: ReactNode
}

function ErrorCover(props: ErrorCoverProps) {
  return (
    <div className="error-cover">
      <div className="error-cover__container">
        <p className="error-cover__text">{props.children}</p>
      </div>
    </div>
  )
}

export default ErrorCover
