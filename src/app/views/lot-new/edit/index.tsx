import Backward from "app/components/UI/Backward/Backward"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Quote from "app/components/UI/Quote/Quote"
import Container from "app/layouts/Container/Container"
import ViewNarrow from "app/layouts/ViewNarrow/ViewNarrow"
import EditLotCategory from "app/views/lot-new/edit/EditLotCategory"
import TemporaryStorage from "infrastructure/persistence/TemporaryStorage"
import { Route, Routes } from "react-router"
import { useParams } from "react-router"

import EditLotDescription from "./EditLotDescription"
import EditLotFiles from "./EditLotFiles"
import EditLotName from "./EditLotName"
import EditLotSpecifications from "./EditLotSpecifications"
import EditLotTrade from "./EditLotTrade"

export const lotNewStorage = new TemporaryStorage("lot-new")
const LotNewEditSectionsOrder = ["", "name", "specifications", "description", "files", "trade"]

function LotNewEditView() {
  const params = useParams<"*">()
  /**
   * 
   * @returns index of the current section
   */
  function getCurrentPosition() {
    if (!params["*"]) return 0
    if (!LotNewEditSectionsOrder.includes(params["*"])) return 0

    return LotNewEditSectionsOrder.indexOf(params["*"])
  }

  const currentPosition = getCurrentPosition()
  /**
   * 
   * @param by shift by this value
   * @returns next section route
   */
  function getRouteBy(by: -1 | 1) {
    const shiftedPosition = currentPosition + by
    return LotNewEditSectionsOrder[shiftedPosition] || ""
  }

  const prevRoute = getRouteBy(-1)
  const nextRoute = getRouteBy(1)

  const isCurrentRouteBase = currentPosition === 0
  const isCurrentRouteLast = currentPosition === LotNewEditSectionsOrder.length - 1
  return (
    <ViewNarrow>
      <div>
        <h2 className="heading">Выставить лот</h2>
        <Routes>
          <Route index element={<EditLotCategory />} />
          <Route path="name" element={<EditLotName />} />
          <Route path="specifications" element={<EditLotSpecifications />} />
          <Route path="description" element={<EditLotDescription />} />
          <Route path="files" element={<EditLotFiles />} />
          <Route path="trade" element={<EditLotTrade />} />
        </Routes>
      </div>
      <Container>
        {isCurrentRouteBase && <div />}
        {!isCurrentRouteBase && (
          <Backward replace to={prevRoute} />
        )}
        {!isCurrentRouteLast && (
          <ButtonLink replace to={nextRoute}>Далее</ButtonLink>
        )}
        {!isCurrentRouteBase && isCurrentRouteLast && (
          <ButtonLink to="../preview">Предпросмотр</ButtonLink>
        )}
      </Container>
      <Quote author="В.И. Ленин">
        <p>Проблема цитат в интернете в том, что люди безоговорочно верят в их подлинность</p>
      </Quote>
    </ViewNarrow>
  )
}

export default LotNewEditView