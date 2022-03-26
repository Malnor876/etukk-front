import LoaderCover from "app/components/UI/Loader/LoaderCover"
import { ReactNode, useEffect, useState } from "react"
import { QueryError, useQuery } from "react-fetching-library"

import { Action, MapPredicate } from "../client.types"

interface QueryContainerProps<P, M = {}> {
  action: Action<P>
  mapping?: MapPredicate<P, M>
  children: (payload: keyof M extends never ? P : M) => ReactNode
}

function QueryContainer<P, M>(props: QueryContainerProps<P, M>) {
  const [payload, setPayload] = useState<P | M>()
  const response = useQuery(props.action)

  useEffect(() => {
    const result = response.payload?.result
    if (result == null) return

    setPayload(props.mapping ? props.mapping(result) : result)
  }, [response.payload])

  if (response.error) throw new QueryError("Error during sending request or handling response.", response)
  if (response.loading) return <LoaderCover />
  if (payload == null) return <>no content</>

  return <>{props.children(payload as never)}</>
}

export default QueryContainer