import "./DetailedSellers.scss"

import Button from "app/components/UI/Button/Button"
import Details from "app/components/UI/Details/Details"
import Previews from "app/layouts/Previews/Previews"
import { IMAGE_MOCKS } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import SellerPreview, { SellerPreviewProps } from "domain/seller/SellerPreview/SellerPreview"
import { useState } from "react"
import { Link } from "react-router-dom"
import { classWithModifiers } from "utils/common"

interface DetailedSellersProps {
  sellers: SellerPreviewProps[]
}

function DetailedSellers(props: DetailedSellersProps) {
  const [expandedSeller, setExpandedSeller] = useState<SellerPreviewProps | null>(null)
  function onSellerClick(seller: SellerPreviewProps) {
    console.log(seller)
    setExpandedSeller(seller)
  }
  return (
    <div className="detailed-sellers">
      {expandedSeller === null && (
        <div className="detailed-sellers__previews">
          <Previews>
            {props.sellers.map((seller, index) => (
              <div className="detailed-sellers__preview" onClick={() => onSellerClick(seller)} key={index}>
                <SellerPreview {...seller} />
              </div>
            ))}
          </Previews>
        </div>
      )}
      <div className={classWithModifiers("detailed-sellers__expanded", !!expandedSeller && "active")}>
        {expandedSeller && <SellerPreview {...expandedSeller} />}
        <div className="detailed-sellers__log">
          <Button className="detailed-sellers__back" onClick={() => setExpandedSeller(null)}>Back</Button>
          {/* <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              startBid={1}
              startedAt={new Date}
              title="Test Preview"
            />
          </Details>
          <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              startBid={1}
              startedAt={new Date}
              title="Test Preview"
            />
          </Details>
          <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              startBid={1}
              startedAt={new Date}
              title="Test Preview"
            />
          </Details>
          <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              startBid={1}
              startedAt={new Date}
              title="Test Preview"
            />
          </Details>
          <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              startBid={1}
              startedAt={new Date}
              title="Test Preview"
            />
          </Details>
          <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              startBid={1}
              startedAt={new Date}
              title="Test Preview"
            />
          </Details> */}
        </div>
      </div>
    </div>
  )
}

export default DetailedSellers