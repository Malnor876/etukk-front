import { Route, Routes } from "react-router"

import Chat from "./components/containers/Chat/Chat"
import Textarea from "./components/UI/Textarea/Textarea"
import TextareaAttachments from "./components/UI/Textarea/TextareaAttachments"
import moderPNG from "./moder.png"

function AppRouter() {
  return (
    <Routes>
      {/* <Route path="/" element={<BaseLayout />}>
        <Route path="/1" />
      </Route> */}
      <Route path="/" element={<TextareaAttachments placeholder="Ваш отзыв..." />} />
    </Routes>
  )
}

export function AppBasicRoutes() {
  return (
    <Routes>
      <Route path="/" />
    </Routes>
  )
}

export default AppRouter
