import { ReactError } from "app/components/services/ErrorBoundary/ErrorBoundary.errors"
import { IMAGE_MOCKS } from "constants/mocks"
import LotBidUp from "domain/Lot/LotBidUp"
import LotInfo from "domain/Lot/LotInfo"
import LotTrade from "domain/Lot/LotTrade"
import { useParams } from "react-router"

function LotView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotView, "lotId is not number")
  }

  function onBookmark() {
    1
  }

  const specifications = [
    { key: "Марка", value: "Русмебель" },
    { key: "Год выпуска", value: "2017" },
    { key: "Номер модели", value: "123456789101112" }
  ]
  return (
    <div className="lot-layout">
      <div className="lot-layout__section">
        <LotInfo slides={[...IMAGE_MOCKS]} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa soluta earum tenetur odio eius nostrum officiis possimus, dolorum asperiores ratione sint dolor veniam obcaecati unde fugiat incidunt, quasi aliquam! Tenetur." specifications={specifications} bookmarked onBookmark={onBookmark} />
      </div>
      <div className="lot-layout__section">
        <LotTrade price={100} city="Москва" title="ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ" tradeStart={new Date} tradeEnd={new Date} />
        <LotBidUp current={1100} start={100} step={100} />
      </div>
    </div>
  )
}

export default LotView