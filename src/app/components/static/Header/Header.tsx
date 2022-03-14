import "./Header.scss"

import Topbar from "./Topbar"

function Header() {
  return (
    <header className="header">
      <Topbar />
      <div className="header__breadcrumbs">Мебель / Стулья / Карточка лота / Сделать ставку</div>
    </header>
  )
}

export default Header
