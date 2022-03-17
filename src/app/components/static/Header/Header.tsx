import "./Header.scss"

import Breadcrumbs from "app/components/containers/Breadcrumbs/Breadcrumbs"

import Topbar from "./Topbar"

function Header() {
  return (
    <header className="header">
      <Topbar />
      <Breadcrumbs />
    </header>
  )
}

export default Header
