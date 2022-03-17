import SearchSuggest from "app/components/containers/SearchSuggest/SearchSuggest"
import Switcher from "app/components/UI/Switcher/Switcher"
import LotPreviews from "app/components/unsorted/LotPreviews/LotPreviews"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function HomeView() {
  return (
    <>
      <SearchSuggest width="75%" onSubmit={d => alert(d)} placeholder="Поиск по Москве..." entries={["Стул мягкий1", "Стул мягкий2", "Стул мягкий", "Стул мягкий", "Стул мягкий3", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий", "Стул мягкий",]} />
      <Switcher>
        <NavLink to="/">Все торги</NavLink>
        <NavLink to="/hot">Горячие торги</NavLink>
      </Switcher>
      <Routes>
        <Route index element={<LotPreviews />} />
      </Routes>
    </>
  )
}

export default HomeView
