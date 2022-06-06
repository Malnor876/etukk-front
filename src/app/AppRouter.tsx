import { Route, Routes } from "react-router"

import ViewLayout from "./layouts/ViewLayout/ViewLayout"
import AboutView from "./views/about/AboutView"
import ContactsView from "./views/contacts"
import ErrorView from "./views/error"
import FavouritesView from "./views/favourites"
import HomeView from "./views/home"
import LotView from "./views/lot"
import LotEditView from "./views/lot/edit/LotEditView"
import LotPreviewView from "./views/lot/preview"
import LotDraftView from "./views/lot-new/edit"
import NotificationsView from "./views/notifications"
import ProfileView from "./views/profile/ProfileView"
import SupportView from "./views/support"
import TermsView from "./views/terms"
import UserView from "./views/user/UserView"

function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path="*" element={<ErrorView />} />
        <Route element={<ViewLayout />}>

          <Route index element={<HomeView />} />
          <Route path="hot" element={<HomeView />} />

          <Route path="lots/:lotId" element={<LotView />} />
          <Route path="lots/:lotId/edit" element={<LotEditView />} />
          <Route path="lots/:lotId/preview" element={<LotPreviewView />} />
          <Route path="lots/:lotId/draft/*" element={<LotDraftView />} />

          <Route path="favourites/*" element={<FavouritesView />} />
          <Route path="notifications/*" element={<NotificationsView />} />
          <Route path="support/*" element={<SupportView />} />
          <Route path="profile/*" element={<ProfileView />} />
          <Route path="user/:userId/*" element={<UserView />} />

          <Route path="terms/*" element={<TermsView />} />
          <Route path="contacts/*" element={<ContactsView />} />
          <Route path="about" element={<AboutView />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter
