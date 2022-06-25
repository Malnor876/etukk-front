import "../Lot.scss"

import useDeviceWidth from "hooks/useDeviceWidth"
import { DeviceWidths } from "hooks/useResizeObserverEntry"
import _ from "lodash"
import { ReactNode } from "react"

import { LotInfoType } from "../types"
import LotInfoBid from "./LotInfoBid"
import LotInfoDetails from "./LotInfoDetails"
import LotInfoPreview from "./LotInfoPreview"
import LotInfoSummary from "./LotInfoSummary"

interface LotInfoProps extends LotInfoType {
  children?: ReactNode
}

function LotInfoLayout(props: LotInfoProps) {
  const started = Date.now() > props.startEndInterval.date1.getTime()
  const ended = Date.now() >= props.startEndInterval.date2.getTime()

  const tradable = started && !ended

  const Preview = <LotInfoPreview {..._.pick(props, "id", "slides", "bookmarked")} />
  const Summary = <LotInfoSummary {..._.pick(props, "description", "specifications", "seller")} />
  const Details = <LotInfoDetails {..._.pick(props, "title", "city", "startPrice", "startEndInterval", "delivery")} />
  const BidOrChildren = props.children || (
    tradable && <LotInfoBid {..._.pick(props, "id", "currentPrice", "betStep")} />
  )

  const [isMobile] = useDeviceWidth(DeviceWidths.Mobile)
  if (isMobile) {
    return (
      <div className="lot-info-layout">
        {Preview}
        {Details}
        {Summary}
        <div className="lot-info-layout__fixed">
          {BidOrChildren}
        </div>
      </div>
    )
  }
  return (
    <div className="lot-info-layout">
      <div className="lot-info-layout__section">
        {Preview}
        {Summary}
      </div>
      <div className="lot-info-layout__section">
        {Details}
        {BidOrChildren}
      </div>
    </div>
  )
}

export default LotInfoLayout