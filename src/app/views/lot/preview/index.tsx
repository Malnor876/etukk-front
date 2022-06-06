import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Buttons from "app/layouts/Buttons/Buttons"
import { LotInfoLayout } from "domain/Lot/Lot"
import { isValidResponse } from "infrastructure/persistence/api/client"
import { getLotDraftByDraftId, postLotDraftByLotIdModerate } from "infrastructure/persistence/api/data/actions"
import { mapLot } from "infrastructure/persistence/api/mappings/lots"
import { useClient } from "react-fetching-library"
import { Helmet } from "react-helmet"
import { useNavigate, useParams } from "react-router-dom"

function LotPreviewView() {
  const { lotId } = useParams<"lotId">()
  if (lotId == null) {
    throw new ReactError(LotPreviewView, "got no lotId")
  }
  if (isNaN(+lotId)) {
    throw new ReactError(LotPreviewView, "lotId is not number")
  }

  const client = useClient()
  const navigate = useNavigate()
  async function publishNewLot() {
    if (lotId == null) return

    const response = await client.query(postLotDraftByLotIdModerate(+lotId))
    if (!isValidResponse(response)) return

    navigate("/lots/" + lotId)
  }
  return (
    <>
      <Helmet>
        <title>Просмотр лота перед публикацией</title>
      </Helmet>
      <QueryContainer action={getLotDraftByDraftId(+lotId)} mapping={mapLot}>
        {payload => (
          <>
            <h2 className="heading">Просмотр лота перед публикацией</h2>
            <LotInfoLayout {...payload}>
              <Buttons>
                <Button await onClick={publishNewLot}>Опубликовать</Button>
                <ButtonLink outline to={`/lots/${lotId}/edit`}>Редактировать</ButtonLink>
              </Buttons>
            </LotInfoLayout>
          </>
        )}
      </QueryContainer>
    </>
  )
}

export default LotPreviewView