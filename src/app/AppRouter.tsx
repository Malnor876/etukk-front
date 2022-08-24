import LotNotification from "areas/lot/LotNotification"
import {Route, Routes} from "react-router"

import FullscreenSignIn from "./components/modals/auth/FullscreenSignIn"
import FullscreenSignUpEntity from "./components/modals/auth/FullscreenSignUpEntity"
import FullscreenSignUpPerson from "./components/modals/auth/FullscreenSignUpPerson"
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
        <Route path="login" element={<FullscreenSignIn />} />
        <Route path="registerPerson" element={<FullscreenSignUpPerson />} />
        <Route path="registerEntity" element={<FullscreenSignUpEntity />} />
        <Route element={<ViewLayout />}>
          <Route index element={<HomeView />} />
          <Route path="hot" element={<HomeView />} />
          <Route path="search/:categoryId" element={<HomeView />} />

          <Route path="lots/:lotId" element={<LotView />} />
          <Route path="lots/:lotId/edit" element={<LotEditView />} />
          <Route path="lots/:lotId/preview" element={<LotPreviewView />} />
          <Route
            path="lots/:lotId/notifications"
            element={<LotNotification />}
          />
          <Route path="lots/draft/*" element={<LotDraftView />} />

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
