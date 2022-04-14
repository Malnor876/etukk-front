import Button from "app/components/UI/Button/Button"
import Details from "app/components/UI/Details/Details"
import Previews from "app/layouts/Previews/Previews"
import SubjectLog from "app/layouts/SubjectLog/SubjectLog"
import { IMAGE_MOCKS } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import SellerPreview from "domain/seller/SellerPreview/SellerPreview"
import { useState } from "react"
import { Link } from "react-router-dom"

import { LotPreviewType } from "./types"

interface DetailedLotsProps {
  lots: LotPreviewType[]
}

function DetailedLots(props: DetailedLotsProps) {
  const [expandedLot, setExpandedLot] = useState<LotPreviewType | null>(null)
  function onSellerClick(lot: LotPreviewType) {
    setExpandedLot(lot)
  }
  return (
    <>
      {expandedLot === null && (
        <Previews>
          {props.lots.map(lot => (
            <button type="button" key={lot.id}>
              <LotPreview {...lot} onClick={() => onSellerClick(lot)} />
            </button>
          ))}
        </Previews>
      )}
      {expandedLot !== null && (
        <SubjectLog subject={
          <>
            <LotPreview {...expandedLot} />
            <br />
            <Button>Отписаться</Button>
          </>
        } onBackward={() => setExpandedLot(null)}>
          <Details date={new Date} summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <SellerPreview {...{
              id: 1,
              avatar: IMAGE_MOCKS[0],
              name: "ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом",
              city: "Москва",
              likes: 5,
              dislikes: 1
            }} />
          </Details>
        </SubjectLog>
      )}
    </>
  )
}

export default DetailedLots