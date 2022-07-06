import Previews from "app/layouts/Previews/Previews"

import { LotPreviewType } from "../types"
import LotPreview from "./LotPreview"

interface LotPreviewsProps {
  merchant?: "seller" | "buyer"
  previews: LotPreviewType[]
}

function LotPreviews(props: LotPreviewsProps) {
  return (
    <Previews>
      {props.previews.map(lotPreview => (
        <LotPreview {...lotPreview} merchant={props.merchant} key={lotPreview.id} />
      ))}
    </Previews>
  )
}

export default LotPreviews