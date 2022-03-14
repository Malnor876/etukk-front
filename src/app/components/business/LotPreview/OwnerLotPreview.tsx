import "./LotPreview.scss"

import Icon from "app/components/UI/Icon/Icon"
import { Link } from "react-router-dom"

interface LotProps {
  image: string
  title: string
  city: string
  startBid: number
  startedAt: Date
}

function LotPreview(props: LotProps) {
  const date = props.startedAt.toLocaleString("ru", { timeStyle: "short", dateStyle: "short" })
  return (
    <div className="lot-preview">
      <img src={props.image} alt="preview" className="lot-preview__image" />
      <div className="lot-preview__info">
        <div className="lot-preview__title">{props.title}</div>
        <div className="lot-preview__city">
          <span>{props.city}</span>
          <Icon name="truck" />
        </div>
        <div className="lot-preview__details">
          <div className="lot-preview__entry">
            <small>Начальная ставка</small>
            <strong>{props.startBid.toPrice("ru", "rub")}</strong>
          </div>
          <div className="lot-preview__entry">
            <small>Начало торгов</small>
            <strong>{date.replace(", ", " в ")}</strong>
          </div>
        </div>
      </div>
      <button className="lot-preview__expand" aria-details="toggle the full log of this lot" type="button">
        <Icon name="more" />
      </button>
    </div>
  )
}

export default LotPreview
