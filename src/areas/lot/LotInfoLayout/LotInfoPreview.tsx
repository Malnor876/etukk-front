import Slider from "app/components/containers/Slider/Slider"
import Bookmark from "app/components/UI/Bookmark/Bookmark"
import {useSelector} from "react-redux"

import {LotInfoType} from "../types"

interface LotInfoPreviewProps
  extends Pick<LotInfoType, "id" | "slides" | "bookmarked" | "user_id"> {}

function LotInfoPreview(props: LotInfoPreviewProps) {
  const myId = useSelector(state => state.user).id
  const isMyLot = Number(myId) === Number(props.user_id)
  return (
    <div className="lot-info-preview">
      <Slider slides={props.slides} allowFullscreen />
      {!isMyLot && (
        <Bookmark
          className="lot-info-preview__bookmark"
          type="lot"
          id={props.id}
          defaultValue={props.bookmarked}
        />
      )}
    </div>
  )
}

export default LotInfoPreview
