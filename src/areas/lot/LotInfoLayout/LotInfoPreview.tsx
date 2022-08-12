import Slider from "app/components/containers/Slider/Slider"
import Bookmark from "app/components/UI/Bookmark/Bookmark"

import { LotInfoType } from "../types"

interface LotInfoPreviewProps extends Pick<LotInfoType, "id" | "slides" | "bookmarked"> { }

function LotInfoPreview(props: LotInfoPreviewProps) {
  return (
    <div className="lot-info-preview">
      <Slider slides={props.slides} allowFullscreen />
      <Bookmark className="lot-info-preview__bookmark" type="lot" id={props.id} defaultValue={props.bookmarked} />
    </div>
  )
}

export default LotInfoPreview
