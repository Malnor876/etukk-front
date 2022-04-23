import LoaderCover from "app/components/UI/Loader/LoaderCover"
import { Action, MapPredicate } from "infrastructure/persistence/api/client.types"
import { ReactNode, useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"

interface QueryContainerProps<P, M> {
  action: Action<P>
  mapping?: MapPredicate<P, M>
  children: (payload: keyof M extends never ? P : M) => ReactNode
}

function QueryContainer<P, M>(props: QueryContainerProps<P, M>) {
  const [payload, setPayload] = useState<unknown>()
  const response = useQuery(props.action)

  useEffect(() => {
    if (response.payload == null) return

    setPayload(props.mapping ? props.mapping(response.payload) : response.payload)
  }, [response.payload])

  if (response.error) throw new QueryError("Error during sending request or handling response.", response)
  if (response.loading) return <LoaderCover />
  if (response.payload == null) throw new QueryError("Response payload is null.", response)
  // Show loader while `payload` state is not updated
  if (payload == null) return <LoaderCover />

  return <>{props.children(payload as never)}</>
}

export default QueryContainer