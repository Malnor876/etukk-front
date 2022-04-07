import "./Header.scss"

import Breadcrumbs from "app/components/containers/Breadcrumbs/Breadcrumbs"
import Topbar from "domain/navigation/Topbar/Topbar"

function Header() {
  return (
    <header className="header">
      <Topbar />
      <Breadcrumbs />
    </header>
  )
}

export default Header
