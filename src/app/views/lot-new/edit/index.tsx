import RequiredAuthCover from "app/components/containers/QueryContainer/RequiredAuthCover"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import ViewNarrow from "app/layouts/ViewNarrow/ViewNarrow"
import EditLotCategory from "app/views/lot-new/edit/EditLotCategory"
import TemporaryStorage from "infrastructure/persistence/TemporaryStorage"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router"
import { useParams } from "react-router"
import { isDictionary } from "utils/common"

import EditLotDescription from "./EditLotDescription"
import EditLotFiles from "./EditLotFiles"
import EditLotName from "./EditLotName"
import EditLotSpecifications from "./EditLotSpecifications"
import EditLotTrade from "./EditLotTrade"
import { useDraftNewLot } from "./helpers"

export const lotDraftStorage = new TemporaryStorage("lot-new")
const lotDraftEditSectionsOrder = ["", "title", "specifications", "description", "files", "trade"]

function LotDraftView() {
  const [, setFlag] = useState(false)

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
    // console.log(by, shiftedPosition)
    return lotDraftEditSectionsOrder[shiftedPosition] || ""
  }

  const prevRoute = getRouteBy(-1)
  const nextRoute = getRouteBy(1)

  const isCurrentRouteBase = currentPosition === 0
  const isCurrentRouteLast = currentPosition === lotDraftEditSectionsOrder.length - 1

  const draftLot = useDraftNewLot()

  // const lotDraftStorageKeys = lotDraftStorage.keys() as string[]
  // const buttonDisabled = lotDraftStorageKeys.some(key => lotDraftStorage.get(key) == null)
  const currentState = lotDraftStorage.get(params["*"] || "category")
  const buttonDisabled = params["*"] === "specifications" ? dd() : (currentState == null || (currentState as []).length === 0)
  function dd() {
    const g = lotDraftStorage.get("specifications")
    console.log(g)
    if (!(g instanceof Array)) return false
    return g.some(item => !isDictionary(g) && ((item?.key?.length <= 0) || item?.value?.length <= 0))
  }
  function asd() {
    // console.log(lotDraftStorage.get("date"), params["*"])
    return (
      false
      || lotDraftStorage.get("date") == null
      || (lotDraftStorage.get("price") == null || (lotDraftStorage.get("price") as []).length === 0)
      || (lotDraftStorage.get("city") == null || (lotDraftStorage.get("city") as []).length === 0)
    )
  }

  useEffect(() => {
    const remove = lotDraftStorage.on(() => {
      setFlag(flag => !flag)
    })

    return () => {
      remove()
    }
  }, [])

  const user = useSelector(state => state.user)
  if (!user.auth) {
    return (
      <RequiredAuthCover />
    )
  }

  return (
    <ViewNarrow>
      <div>
        <Helmet>
          <title>Разместить лот | etukk.ru</title>
        </Helmet>
        <h2 className="heading">Разместить лот</h2>
        <Routes>
          <Route index element={<EditLotCategory />} />
          <Route path="title" element={<EditLotName />} />
          <Route path="specifications" element={<EditLotSpecifications />} />
          <Route path="description" element={<EditLotDescription />} />
          <Route path="files" element={<EditLotFiles />} />
          <Route path="trade" element={<EditLotTrade />} />
        </Routes>
      </div>
      <Buttons centered>
        {isCurrentRouteBase && <div />}
        {!isCurrentRouteBase && (
          <Backward to={prevRoute} />
        )}
        {!isCurrentRouteLast && (
          <ButtonLink to={nextRoute} disabled={buttonDisabled}>Далее</ButtonLink>
        )}
        {!isCurrentRouteBase && isCurrentRouteLast && (
          <Button await onClick={draftLot} disabled={asd()}>Предпросмотр</Button>
        )}
      </Buttons>
      {/* <Quote author="В.И. Ленин">
        <p>Проблема цитат в интернете в том, что люди безоговорочно верят в их подлинность</p>
      </Quote> */}
    </ViewNarrow>
  )
}

export default LotDraftView