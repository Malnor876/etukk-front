import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
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
import { useDraftNewLot } from "./helpers"

export const lotDraftStorage = new TemporaryStorage("lot-new")
const lotDraftEditSectionsOrder = ["", "name", "specifications", "description", "files", "trade"]

function LotDraftView() {
  const params = useParams<"*">()
  /**
   * 
   * @returns index of the current section
   */
  function getCurrentPosition() {
    if (!params["*"]) return 0
    if (!lotDraftEditSectionsOrder.includes(params["*"])) return 0

    return lotDraftEditSectionsOrder.indexOf(params["*"])
  }

  const currentPosition = getCurrentPosition()
  /**
   * 
   * @param by shift by this value
   * @returns next section route
   */
  function getRouteBy(by: -1 | 1) {
    const shiftedPosition = currentPosition + by
    return lotDraftEditSectionsOrder[shiftedPosition] || ""
  }

  // const prevRoute = getRouteBy(-1)
  const nextRoute = getRouteBy(1)

  const isCurrentRouteBase = currentPosition === 0
  const isCurrentRouteLast = currentPosition === lotDraftEditSectionsOrder.length - 1

  const draftLot = useDraftNewLot()

  return (
    <ViewNarrow>
      <div>
        <h2 className="heading">Разместить лот</h2>
        <Routes>
          <Route index element={<EditLotCategory />} />
          <Route path="name" element={<EditLotName />} />
          <Route path="specifications" element={<EditLotSpecifications />} />
          <Route path="description" element={<EditLotDescription />} />
          <Route path="files" element={<EditLotFiles />} />
          <Route path="trade" element={<EditLotTrade />} />
        </Routes>
      </div>
      <Buttons centered>
        {isCurrentRouteBase && <div />}
        {!isCurrentRouteBase && (
          <Backward />
        )}
        {!isCurrentRouteLast && (
          <ButtonLink to={nextRoute}>Далее</ButtonLink>
        )}
        {!isCurrentRouteBase && isCurrentRouteLast && (
          <Button await onClick={draftLot}>Предпросмотр</Button>
        )}
      </Buttons>
      {/* <Quote author="В.И. Ленин">
        <p>Проблема цитат в интернете в том, что люди безоговорочно верят в их подлинность</p>
      </Quote> */}
    </ViewNarrow>
  )
}

export default LotDraftView