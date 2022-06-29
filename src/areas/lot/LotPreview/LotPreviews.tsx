import Previews from "app/layouts/Previews/Previews"

import { LotPreviewType } from "../types"
import LotPreview from "./LotPreview"

interface LotPreviewsProps {
  previews: LotPreviewType[]
}

function LotPreviews(props: LotPreviewsProps) {
  return (
    <Previews>
      {props.previews.map(lotPreview => (
        <LotPreview {...lotPreview} key={lotPreview.id} />
      ))}
    </Previews>
  )
}

export default LotPreviews