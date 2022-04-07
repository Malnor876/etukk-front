import "./Topbar.scss"

import SidebarNavDrawer from "app/components/modals/SidebarNavDrawer/SidebarNavDrawer"
import Icon from "app/components/UI/Icon/Icon"
import { Modal } from "modules/modal/controller"
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
      <button type="button" onClick={() => Modal.open(SidebarNavDrawer)}>
        <Icon className="topbar-menu__icon" name="menu" />
      </button>
    </div>
  )
}

export default Topbar
