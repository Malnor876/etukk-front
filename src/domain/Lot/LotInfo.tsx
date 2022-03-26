import "./Lot.scss"

import Slider from "app/components/containers/Slider/Slider"
import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import { useState } from "react"
import { classWithModifiers } from "utils/common"

import { LotInfoType } from "./types"

interface LotInfoProps extends LotInfoType {
  onBookmark?(): void
}

function LotInfo(props: LotInfoProps) {
  const [bookmarked, setBookmarked] = useState(props.bookmarked)
  function onBookmark() {
    props.onBookmark?.()
    setBookmarked(!bookmarked)
  }
  return (
    <div className="lot-info">
      <div className="lot-info__preview">
        <Slider slides={props.slides} />
        {bookmarked != null && (
          <button className={classWithModifiers("lot-info__bookmark", bookmarked && "active")} onClick={onBookmark}>
            <Icon name="bookmark-3d" />
          </button>
        )}
      </div>
      <h5>Описание лота</h5>
      <p className="lot-info__desc">{props.description}</p>
      <h5>Характеристики</h5>
      <Entries>
        {props.specifications.map(((specification, index) => (
          <Entry key={index}><span>{specification.key}</span><span>{specification.value}</span></Entry>
        )))}
      </Entries>
    </div>
  )
}

export default LotInfo