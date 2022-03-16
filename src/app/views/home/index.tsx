import LotPreviews from "app/components/TT/LotPreviews/LotPreviews"
import Switcher from "app/components/UI/Switcher/Switcher"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function HomeView() {
  return (
    <>
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
