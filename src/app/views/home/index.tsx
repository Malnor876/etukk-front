import FiltersContainer from "app/components/containers/Filters/FiltersContainer"
import SearchSuggest from "app/components/containers/SearchSuggest/SearchSuggest"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Switcher from "app/components/UI/Switcher/Switcher"
import Container from "app/layouts/Container/Container"
import Previews from "app/layouts/Previews/Previews"
import { LOT_PREVIEW_MOCK } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { getLots } from "infrastructure/persistence/api/actions/lots"
import QueryContainer from "infrastructure/persistence/api/components/QueryContainer"
import { mapGetLots } from "infrastructure/persistence/api/mappings/lots"
import { useState } from "react"
import { useMatch } from "react-router"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function HomeView() {
  const matchHot = useMatch("hot")
  const [search, setSearch] = useState("")
  const isHot = !!matchHot
  return (
    <>
      <SearchSuggest width="75%" placeholder="Поиск по Москве..." onSubmit={setSearch}>
        <option value="Стул мягкий">Стул мягкий</option>
        <option value="Стул мягкий1">Стул мягкий1</option>
        <option value="Стул мягкий2">Стул мягкий2</option>
        <option value="Стул мягкий3">Стул мягкий3</option>
        <option value="Стул мягкий4">Стул мягкий4</option>
      </SearchSuggest>
      <Switcher>
        <NavLink to="/">Все торги</NavLink>
        <NavLink to="/hot">Горячие торги</NavLink>
      </Switcher>
      <Routes>
        <Route index element={
          <Container row>
            <SortingToggle />
            {/* <QueryContainer action={getLots(12, 1)} mapping={mapGetLots}>
              {payload => ( */}
            <Container>
              <Previews>
                {/* {payload.items.map(lot => (
                      <LotPreview {...lot} key={lot.id} />
                    ))} */}
                {[...Array(12)].map((_, index) => (
                  <LotPreview {...LOT_PREVIEW_MOCK} key={index} />
                ))}
              </Previews>
              <FiltersContainer onSubmit={console.log} />
            </Container>
            {/* )}
            </QueryContainer> */}
          </Container>
        } />
      </Routes>
    </>
  )
}

export default HomeView
