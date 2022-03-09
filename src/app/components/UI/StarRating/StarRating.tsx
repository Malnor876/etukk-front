import "./StarRating.scss"

import { Dispatch, useState } from "react"
import { classWithModifiers } from "utils/common"

import Icon from "../Icon/Icon"

const STAR_RATING_INIT = 1
const STAR_RATING_MAX = 5

interface StarRatingProps {
  size?: "small"
  readOnly?: boolean

  max?: number
  defaultValue?: number
  onChange?: Dispatch<number>
}

function StarRating(props: StarRatingProps) {
  const [rating, setRating] = useState(props.defaultValue || STAR_RATING_INIT)
  const [pointerRating, setPointerRating] = useState(props.defaultValue || STAR_RATING_INIT)
  function updatePointerRating(rating: number) {
    if (props.readOnly) return
    if (rating < 1) rating = 1

    setPointerRating(rating)
  }
  function updateRating(rating: number) {
    if (props.readOnly) return

    setRating(rating)
    props.onChange?.(rating)
  }

  return (
    <div className={classWithModifiers("star-rating", props.size, props.readOnly && "readonly")} onPointerLeave={() => updatePointerRating(rating)}>
      {[...Array(props.max || STAR_RATING_MAX)].map((_, index) => {
        const beforeRating = index + 0.5
        const afterRating = index + 1
        return (
          <div className="star-rating__star" key={index}>
            <div className="star-rating__base">
              <Icon name="star-empty" />
            </div>
            <div
              className={classWithModifiers("star-rating__before", pointerRating >= beforeRating && "active")}
              onClick={() => updateRating(beforeRating)}
              onMouseEnter={() => updatePointerRating(beforeRating)}
            ><Icon name="star" /></div>
            <div
              className={classWithModifiers("star-rating__after", pointerRating >= afterRating && "active")}
              onClick={() => updateRating(afterRating)}
              onMouseEnter={() => updatePointerRating(afterRating)}
            ><Icon name="star" /></div>
          </div>
        )
      })}
    </div>
  )
}

export default StarRating
