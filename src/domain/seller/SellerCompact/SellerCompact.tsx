import "./SellerCompact.scss"

import CounterIcon from "app/components/UI/CounterIcon/CounterIcon"
import StarRating from "app/components/UI/StarRating/StarRating"
import { getRating } from "utils/business"

interface SellerCompactProps {
  id: number
  name: string

  likes: number
  dislikes: number
}

function SellerCompact(props: SellerCompactProps) {
  return (
    <div className="seller-compact">
      <div className="seller-compact__entries">
        <div className="seller-compact__name">{props.name}</div>
        <div className="seller-compact__id">Частное лицо / id{props.id}</div>
      </div>
      <div className="seller-compact__entries seller-compact__entries--right">
        <div className="seller-compact__entry">
          <span>Отзывы</span>
          <CounterIcon icon="like" count={props.likes} />
          <CounterIcon icon="dislike" count={props.dislikes} />
        </div>
        <div className="seller-compact__entry">
          <span>Рейтинг</span>
          <StarRating size="small" defaultValue={getRating(props.likes, props.dislikes)} />
        </div>
      </div>
    </div>
  )
}

export default SellerCompact
