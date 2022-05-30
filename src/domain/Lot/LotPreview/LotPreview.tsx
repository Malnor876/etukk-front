import "./LotPreview.scss"

import Bookmark from "app/components/UI/Bookmark/Bookmark"
import Icon from "app/components/UI/Icon/Icon"
import { LotPreviewType } from "domain/Lot/types"
import { Link } from "react-router-dom"
import { humanizeDate } from "utils/date"

interface LotProps extends LotPreviewType {
  onClick?(): void
}

function LotPreview(props: LotProps) {
  return (
    <div className="lot-preview" onClick={props.onClick}>
      <>
        <img src={props.image} alt="preview" className="lot-preview__image" />
        <div className="lot-preview__info">
          <div className="lot-preview__title">{props.title}</div>
          <div className="lot-preview__city">
            <span>г. {props.city}</span>
            <Icon name="truck" />
          </div>
          <div className="lot-preview__details">
            <div className="lot-preview__entry">
              <small>Начальная ставка</small>
              <strong>{props.price.toPrice("ru", "rub")}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Начало торгов</small>
              <strong>{humanizeDate(props.tradeStart)}</strong>
            </div>
          </div>
        </div>
        {props.onClick ?? (
          <Link className="ghost" to={`/lots/${props.id}`} />
        )}
        <Bookmark className="lot-preview__bookmark" defaultValue={props.bookmarked} id={props.id} type="lots" />
      </>
    </div>
  )
}

export default LotPreview
