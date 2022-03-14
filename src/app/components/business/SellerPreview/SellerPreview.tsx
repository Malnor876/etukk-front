import "./SellerPreview.scss"

import CounterIcon from "app/components/UI/CounterIcon/CounterIcon"
import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import EntryCounter from "app/layouts/Entries/EntryCounter"
import { Link } from "react-router-dom"
import { getRating } from "utils/business"

interface SellerPreviewProps {
  avatar: string
  name: string
  city: string

  likes: number
  dislikes: number
  lotsCount: number
}

function SellerPreview(props: SellerPreviewProps) {
  return (
    <div className="seller-preview">
      <img src={props.avatar} alt="avatar" className="seller-preview__avatar" />
      <div className="seller-preview__name">{props.name}</div>
      <div className="seller-preview__city">{props.city}</div>
      <div className="seller-preview__entries">
        <Entries>
          <EntryCounter title="Рейтинг продавца">
            <CounterIcon icon="star" count={getRating(props.likes, props.dislikes)} />
          </EntryCounter>
          <EntryCounter title="Отзывы">
            <CounterIcon icon="like" count={props.likes} />
            <CounterIcon icon="dislike" count={props.dislikes} />
          </EntryCounter>
          <EntryCounter title="Размещено лотов">
            <CounterIcon icon="hammer" count={props.lotsCount} />
          </EntryCounter>
        </Entries>
      </div>
      <Link className="ghost" to="/seller/1" />
      <button className="lot-preview__bookmark" type="button">
        <Icon name="bookmark-3d" />
      </button>
    </div>
  )
}

export default SellerPreview
