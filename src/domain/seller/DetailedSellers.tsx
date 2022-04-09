import Details from "app/components/UI/Details/Details"
import Previews from "app/layouts/Previews/Previews"
import SubjectLog from "app/layouts/SubjectLog/SubjectLog"
import { IMAGE_MOCKS } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import SellerPreview, { SellerPreviewProps } from "domain/seller/SellerPreview/SellerPreview"
import { useState } from "react"
import { Link } from "react-router-dom"

interface DetailedSellersProps {
  sellers: SellerPreviewProps[]
}

function DetailedSellers(props: DetailedSellersProps) {
  const [expandedSeller, setExpandedSeller] = useState<SellerPreviewProps | null>(null)
  function onSellerClick(seller: SellerPreviewProps) {
    setExpandedSeller(seller)
  }
  return (
    <>
      {expandedSeller === null && (
        <Previews>
          {props.sellers.map(seller => (
            <button type="button" onClick={() => onSellerClick(seller)} key={seller.id}>
              <SellerPreview {...seller} />
            </button>
          ))}
        </Previews>
      )}
      {expandedSeller !== null && (
        <SubjectLog subject={
          <SellerPreview {...expandedSeller} />
        } onBackward={() => setExpandedSeller(null)}>
          <Details summary={
            <>Продавец разместил новый лот в категории <Link to="/catalog">Мебель</Link></>
          }>
            <LotPreview
              image={IMAGE_MOCKS[1]}
              city="Moscow"
              title="Test Preview"
              id={1}
              price={123}
              tradeStart={new Date}
            />
          </Details>
        </SubjectLog>
      )}
    </>
  )
}

export default DetailedSellers