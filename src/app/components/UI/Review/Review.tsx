import "./Review.scss"

import SliderPopup from "app/components/modals/SliderPopup/SliderPopup"
import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"
import { Modal } from "modules/modal/controller"
import { Link } from "react-router-dom"

interface ReviewProps {
  user: Pick<UserSigned, "id" | "avatar" | "firstName">
  product?: string
  comment: string
  attachments: string[]
  date: Date
}

function Review(props: ReviewProps) {
  const date = props.date.toLocaleDateString("ru")
  return (
    <div className="review">
      <div className="review__header">
        <div className="review-user">
          <img src={props.user.avatar} alt="avatar" className="review-user__avatar" />
          <div className="review-user__info">
            <div className="review-user__name">{props.user.firstName}</div>
            {props.product && (
              <div className="review__product">{props.product}</div>
            )}
          </div>
          <Link className="ghost" to={"/user/" + props.user.id} />
        </div>
        <time className="review__date">{date}</time>
      </div>
      <p className="review__text">{props.comment}</p>
      {props.attachments.length > 0 && (
        <div className="review__attachments" onClick={() => Modal.open(SliderPopup, { slides: props.attachments })}>
          {props.attachments.map((attachment, index) => (
            <img className="review__attachment" src={attachment} alt="attachment" key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Review
