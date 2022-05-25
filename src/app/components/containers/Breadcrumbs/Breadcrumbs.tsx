import "./Breadcrumbs.scss"

import { getGetBreadcrumbsByPagesId, getGetPagesUrlByUrl } from "infrastructure/persistence/api/data/actions"
import { useQuery } from "react-fetching-library"
import { useLocation } from "react-router"

import QueryContainer from "../QueryContainer/QueryContainer"


function Breadcrumbs() {
  const location = useLocation()
  return null
  return (
    <QueryContainer action={getGetPagesUrlByUrl(encodeURIComponent(location.pathname))}>
      {payload => (
        <QueryContainer action={getGetBreadcrumbsByPagesId(1)}>
          {payload => (
            <div className="breadcrumbs">
              {payload.result.map(item => (
                <div className="breadcrumbs__chunk" key={item.id}>{item.name}</div>
              ))}
            </div>
          )}
        </QueryContainer>
      )}
    </QueryContainer>
  )
}

export default Breadcrumbs
