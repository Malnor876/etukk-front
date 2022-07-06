import "./SellerCompact.scss"

import StarRating from "app/components/UI/StarRating/StarRating"
import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"
import { Link } from "react-router-dom"

interface SellerCompactProps extends Pick<UserSigned, "id" | "firstName" | "sellerRating"> {
  // likes?: number
  // dislikes?: number
}

function SellerCompact(props: SellerCompactProps) {
  return (
    <div className="seller-compact">
      <div className="seller-compact__entries">
        <div className="seller-compact__name">{props.firstName}</div>
        <div className="seller-compact__id">Частное лицо / id{props.id}</div>
      </div>
      <div className="seller-compact__entries seller-compact__entries--right">
        {/* <div className="seller-compact__entry">
          <span>Отзывы</span>
          <CounterIcon icon="like" count={props.likes ?? 0} />
          <CounterIcon icon="dislike" count={props.dislikes ?? 0} />
        </div> */}
        <div className="seller-compact__entry">
          <span>Рейтинг</span>
          <StarRating size="small" readOnly min={props.sellerRating} />
        </div>
      </div>
      <Link className="ghost" to={"/user/" + props.id} />
    </div>
  )
}

export default SellerCompact
