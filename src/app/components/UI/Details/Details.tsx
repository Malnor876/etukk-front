import "./Details.scss"

import { ReactNode, useState } from "react"
import { classWithModifiers } from "utils/common"
import { humanizeDate } from "utils/date"

import Icon from "../Icon/Icon"

interface DetailsProps {
  date?: Date
  summary: ReactNode
  children: ReactNode
}

function Details(props: DetailsProps) {
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState<number>()
  return (
    <div className="details" aria-expanded={expanded}>
      <div className="details__header">
        <div className="details__left">
          {props.date && (
            <div className="details__date">{humanizeDate("ru", props.date)}</div>
          )}
          <div className="details__summary">{props.summary}</div>
        </div>
        <div className="details__right" onClick={() => setExpanded(!expanded)}>
          <Icon className={classWithModifiers("details__chevron", expanded && "up")} name="chevron" />
          <Icon className="details__more" name="dots" />
        </div>
      </div>
      <div className={classWithModifiers("details__body", expanded && "expanded")} style={{ "--details-height": height }} ref={element => setHeight(element?.scrollHeight)} aria-hidden={!expanded}>
        <div className="details__inner">{props.children}</div>
      </div>
    </div>
  )
}

export default Details
