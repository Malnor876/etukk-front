import "./SidebarNavDrawer.scss"

import Icon from "app/components/UI/Icon/Icon"
import OuterLink from "app/components/UI/OuterLink"
import DrawerLayout from "app/layouts/Modal/DrawerLayout/DrawerLayout"
import TopbarActions from "domain/navigation/Topbar/TopbarActions"
import { useModal } from "modules/modal/hook"
import { NavLink } from "react-router-dom"

function SidebarNavDrawer() {
  const { close } = useModal()
  return (
    <DrawerLayout>
      <div className="sidebar-nav-drawer">
        <div className="sidebar-nav-drawer__header">
          <TopbarActions />
          <button type="button" onClick={close}>
            <Icon className="sidebar-nav-drawer__close" name="cross" />
          </button>
        </div>
        <nav className="sidebar-nav-drawer__nav">
          <NavLink className="sidebar-nav-drawer__link" to="/profile" onClick={close}>Личная информация</NavLink>
          <NavLink className="sidebar-nav-drawer__link" to="/profile/bets" onClick={close}>Мои ставки</NavLink>
          <NavLink className="sidebar-nav-drawer__link" to="/profile/sales" onClick={close}>Мои продажи</NavLink>
          <NavLink className="sidebar-nav-drawer__link" to="/profile/purchases" onClick={close}>Мои покупки</NavLink>
          <NavLink className="sidebar-nav-drawer__link" to="/support" onClick={close}>FAQ</NavLink>
          <NavLink className="sidebar-nav-drawer__link" to="/profile/personal/exit" onClick={close}>Выход</NavLink>
        </nav>
        <div className="sidebar-nav-drawer__bottom">
          <nav className="sidebar-nav-drawer__nav">
            <OuterLink className="sidebar-nav-drawer__link" to="tel:+7 (900) 999-99-99" noTarget>+7 (900) 999-99-99</OuterLink>
            <OuterLink className="sidebar-nav-drawer__link" to="mailto:Etukk@mail.ru">Etukk@mail.ru</OuterLink>
          </nav>
        </div>
      </div>
    </DrawerLayout>
  )
}

export default SidebarNavDrawer
