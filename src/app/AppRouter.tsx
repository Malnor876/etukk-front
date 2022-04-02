import { useContext } from "react"
import { Route, Routes } from "react-router"
import { UNSAFE_NavigationContext, UNSAFE_RouteContext, useInRouterContext } from "react-router"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import ErrorView from "./views/error"
import FavouritesView from "./views/favourites"
import HomeView from "./views/home"
import LotView from "./views/lot"
import LotEditView from "./views/lot/edit/LotEditView"
import LotNewView from "./views/lot-new"
import NotificationsView from "./views/notifications"
import ProfileView from "./views/profile/ProfileView"
import SupportView from "./views/support"
import UserView from "./views/user/UserView"

function AppRouter() {
  const dd = useContext(UNSAFE_NavigationContext)
  const dd2 = useInRouterContext()
  console.log(dd2)
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<ErrorView />} />
        <Route element={<ViewLayout />}>

          <Route index element={<HomeView />} />
          <Route path="hot" element={<HomeView />} />

          <Route path="lots/new/*" element={<LotNewView />} />
          <Route path="lots/edit/:lotId" element={<LotEditView />} />
          <Route path="lots/:lotId" element={<LotView />} />

          <Route path="favourites/*" element={<FavouritesView />} />
          <Route path="notifications/*" element={<NotificationsView />} />
          <Route path="support/*" element={<SupportView />} />
          <Route path="profile/*" element={<ProfileView />} />
          <Route path="user/:userId/*" element={<UserView />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
