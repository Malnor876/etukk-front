import { Route, Routes } from "react-router"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import FavouritesView from "./views/favourites"
import HomeView from "./views/home"
import LotView from "./views/lot"

function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<>404</>} />
        <Route element={<ViewLayout />}>
          <Route index element={<HomeView />} />
          <Route path="hot" element={<HomeView />} />
          <Route path="lot/:lotId" element={<LotView />} />
          <Route path="favourites/*" element={<FavouritesView />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
