import Icon from "app/components/UI/Icon/Icon"
import { NavLink } from "react-router-dom"
import { classWithModifiers } from "utils/common"

import TopbarActions from "./TopbarActions"

function Topbar() {
  return (
    <div className="topbar">
      <nav className="topbar-menu">
        <NavLink className={link => classWithModifiers("topbar-menu__link", link.isActive && "active")} to="/">
          <img src="/static/images/logo.svg" alt="etukk logo" />
        </NavLink>
        <NavLink className={link => classWithModifiers("topbar-menu__link", link.isActive && "active")} to="/catalog">Авто</NavLink>
        <NavLink className={link => classWithModifiers("topbar-menu__link", link.isActive && "active")} to="/catalog">Мебель</NavLink>
        <NavLink className={link => classWithModifiers("topbar-menu__link", link.isActive && "active")} to="/catalog">Личные вещи</NavLink>
        <NavLink className={link => classWithModifiers("topbar-menu__link", link.isActive && "active")} to="/catalog">Еще</NavLink>
      </nav>
      <TopbarActions />
      <Icon name="menu" />
    </div>
  )
}

export default Topbar
