import "./SellerPreview.scss"

import Bookmark from "app/components/UI/Bookmark/Bookmark"
import CounterIcon from "app/components/UI/CounterIcon/CounterIcon"
import Entries from "app/layouts/Entries/Entries"
import EntryCounter from "app/layouts/Entries/EntryCounter"
import {Link} from "react-router-dom"
import {getRating} from "utils/business"

export interface SellerPreviewProps {
  id: number

  avatar: string
  fullName: string
  city: string

  likes?: number
  dislikes?: number
  lotsCount?: number

  linkedTo?: string
  bookmarked?: boolean
}

function SellerPreview(props: SellerPreviewProps) {
  return (
    <div className="seller-preview">
      <div className="seller-preview-avatar">
        <img
          src={props.avatar}
          alt="avatar"
          className="seller-preview-avatar__image"
        />
      </div>
      <div className="seller-preview__details">
        <div className="seller-preview__name">{props.fullName}</div>
        <div className="seller-preview__city">{props.city}</div>
        <div className="seller-preview__entries">
          <Entries>
            {props.likes && props.dislikes && (
              <>
                <EntryCounter title="Рейтинг продавца">
                  <CounterIcon
                    icon="star"
                    count={getRating(props.likes, props.dislikes)}
                  />
                </EntryCounter>
                <EntryCounter title="Отзывы">
                  <CounterIcon icon="like" count={props.likes} />
                  <CounterIcon icon="dislike" count={props.dislikes} />
                </EntryCounter>
              </>
            )}
            {props.lotsCount && (
              <EntryCounter title="Размещено лотов">
                <CounterIcon icon="hammer" count={props.lotsCount} />
              </EntryCounter>
            )}
          </Entries>
        </div>
      </div>
      {props.linkedTo && <Link className="ghost" to={props.linkedTo} />}
      <Bookmark
        className="lot-preview__bookmark"
        type="lot"
        id={props.id}
        defaultValue={props.bookmarked}
      />
    </div>
  )
}

export default SellerPreview
