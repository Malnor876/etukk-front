import FiltersContainer, { FiltersContainerMobile } from "app/components/containers/Filters/FiltersContainer"
import { QueryErrorCoverBoundary } from "app/components/containers/QueryErrorCoverBoundary/QueryErrorCoverBoundary"
import SearchSuggest from "app/components/containers/SearchSuggest/SearchSuggest"
import Switcher from "app/components/UI/Switcher/Switcher"
import Container from "app/layouts/Container/Container"
import useDeviceWidth from "hooks/useDeviceWidth"
import { DeviceWidths } from "hooks/useResizeObserverEntry"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
// import { useMatch } from "react-router"
import { Route, Routes } from "react-router"
import { NavLink, useParams } from "react-router-dom"

import LotPreviewsContainer from "./LotPreviewsContainer"
function HomeView() {
  const params = useParams<"categoryId">()

  // const matchHot = useMatch("hot")
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState<any>({
    categories: params.categoryId
  })
  // const isHot = !!matchHot
  const [isMobile] = useDeviceWidth(DeviceWidths.Mobile)
  useEffect(() => {
    setFilters({ ...filters, categories: params.categoryId })
  }, [params.categoryId])
  return (
    <>
      <Helmet>
        <title>Главная | etukk.ru</title>
      </Helmet>
      <SearchSuggest width="65%" placeholder="Поиск по Москве..." onSubmit={setSearch}>
        {/* <option value="Стул мягкий">Стул мягкий</option>
        <option value="Стул мягкий1">Стул мягкий1</option>
        <option value="Стул мягкий2">Стул мягкий2</option>
        <option value="Стул мягкий3">Стул мягкий3</option>
        <option value="Стул мягкий4">Стул мягкий4</option> */}
      </SearchSuggest>
      {isMobile && (
        <FiltersContainerMobile onSubmit={setFilters} />
      )}
      <Switcher>
        <NavLink to="/">Все торги</NavLink>
        <NavLink to="/hot">Горячие торги</NavLink>
      </Switcher>
      <Routes>
        <Route index element={
          <Container row>
            <Container>
              <QueryErrorCoverBoundary>
                <LotPreviewsContainer search={search} {...filters} />
              </QueryErrorCoverBoundary>
              {!isMobile && (
                <FiltersContainer onSubmit={setFilters} />
              )}
            </Container>
          </Container>
        } />
      </Routes>
    </>
  )
}

export default HomeView
