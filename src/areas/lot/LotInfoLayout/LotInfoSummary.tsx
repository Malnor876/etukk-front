import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import SellerCompact from "areas/seller/SellerCompact/SellerCompact"

import { LotInfoType } from "../types"

interface LotInfoSummaryProps extends Pick<LotInfoType, "description" | "specifications" | "seller"> { }

function LotInfoSummary(props: LotInfoSummaryProps) {
  return (
    <div className="lot-info-summary">
      <h5>Описание лота</h5>
      <p className="lot-info-summary__description">{props.description}</p>
      <h5>Характеристики</h5>
      <Entries>
        {props.specifications.map(((specification, index) => (
          <Entry key={index}>
            <span>{specification.key}</span>
            <span>{specification.value}</span>
          </Entry>
        )))}
      </Entries>
      <br />
      <br />
      <SellerCompact {...props.seller} />
    </div>
  )
}

export default LotInfoSummary
