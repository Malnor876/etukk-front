import { Route, Routes } from "react-router"

import BaseLayout from "./layouts/base/BaseLayout"

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/1" />
      </Route>
    </Routes>
  )
}

// export function AppBasicRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<BaseLayout />}>
//         <Route path="/1" />
//       </Route>
//     </Routes>
//   )
// }

export default AppRouter
