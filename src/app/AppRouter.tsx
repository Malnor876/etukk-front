import { Route, Routes } from "react-router"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import ErrorView from "./views/error"
import FavouritesView from "./views/favourites"
import HomeView from "./views/home"
import LotView from "./views/lot"
import LotNewView from "./views/lot-new"
import NotificationsView from "./views/notifications"
import SupportView from "./views/support"

function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<ErrorView />} />
        <Route element={<ViewLayout />}>

          <Route index element={<HomeView />} />
          <Route path="hot" element={<HomeView />} />

          <Route path="lots/:lotId/*" element={<LotView />} />
          <Route path="lots/new/*" element={<LotNewView />} />

          <Route path="favourites/*" element={<FavouritesView />} />
          <Route path="notifications/*" element={<NotificationsView />} />
          <Route path="support/*" element={<SupportView />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
