import "./ViewLayout.scss"

import Footer from "app/components/static/Footer/Footer"
import Header from "app/components/static/Header/Header"
import Main from "app/components/static/Main/Main"
import { Outlet } from "react-router"

function ViewLayout() {
  return (
    <>
      <Header />
      <Main>
        <div className="view-layout">
          <Outlet />
        </div>
      </Main>
      <Footer />
    </>
  )
}

export default ViewLayout
