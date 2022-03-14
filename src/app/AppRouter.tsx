import { Route, Routes } from "react-router"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import FavouritesView from "./views/favourites"

function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<>2</>} />
        <Route element={<ViewLayout />}>
          <Route path="favourites" element={<FavouritesView />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
