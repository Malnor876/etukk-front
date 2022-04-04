import { Route, Routes } from "react-router"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import ErrorView from "./views/error"
import FavouritesView from "./views/favourites"
import HomeView from "./views/home"
import LotView from "./views/lot"
import LotEditView from "./views/lot/edit/LotEditView"
import LotNewEditView from "./views/lot-new/edit"
import LotNewPreviewView from "./views/lot-new/preview"
import NotificationsView from "./views/notifications"
import ProfileView from "./views/profile/ProfileView"
import SupportView from "./views/support"
import UserView from "./views/user/UserView"

function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<ErrorView />} />
        <Route element={<ViewLayout />}>

          <Route index element={<HomeView />} />
          <Route path="hot" element={<HomeView />} />

          <Route path="lots/new/edit" element={<LotNewEditView />} />
          <Route path="lots/new/preview" element={<LotNewPreviewView />} />
          <Route path="lots/:lotId" element={<LotView />} />
          <Route path="lots/:lotId/edit" element={<LotEditView />} />

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
