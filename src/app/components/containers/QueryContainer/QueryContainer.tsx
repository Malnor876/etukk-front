import FullscreenSignIn from "app/components/modals/auth/FullscreenSignIn"
import Button from "app/components/UI/Button/Button"
import ErrorCover from "app/components/UI/ErrorCover/ErrorCover"
import LoaderCover from "app/components/UI/Loader/LoaderCover"
import { Action, MappingPredicate } from "infrastructure/persistence/api/client.types"
import { Modal } from "modules/modal/controller"
import { ReactNode, useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"
import { useSelector } from "react-redux"

interface QueryContainerProps<P, M> {
  action: Action<P>
  mapping?: MappingPredicate<P, M>
  requiredAuth?: boolean
  children: (payload: keyof M extends never ? P : M) => ReactNode
}

function QueryContainer<P, M>(props: QueryContainerProps<P, M>) {
  const user = useSelector(state => state.user)

  const [payload, setPayload] = useState<unknown>()
  const response = useQuery(props.action, props.requiredAuth ? user.auth : true)

  useEffect(() => { response.query() }, [user.auth])
  useEffect(() => {
    if (response.payload == null) return

    setPayload(props.mapping ? props.mapping(response.payload) : response.payload)
  }, [response.payload])

  if (props.requiredAuth) {
    return (
      <ErrorCover>
        <p>Авторизуйтесь чтобы просмотреть данную секцию</p>
        <Button onClick={() => Modal.open(FullscreenSignIn)}>Войти</Button>
      </ErrorCover>
    )
  }

  if (response.error) throw new QueryError("Error during sending request or handling response.", response)
  if (response.loading) return <LoaderCover />
  if (response.payload == null) throw new QueryError("Response payload is empty.", response)
  // Show loader while `payload` state is still not updated
  if (payload == null) return <LoaderCover />

  return <>{props.children(payload as never)}</>
}

export default QueryContainer