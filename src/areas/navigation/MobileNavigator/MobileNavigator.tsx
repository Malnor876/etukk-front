import "./MobileNavigator.scss"

import Icon, {IconName} from "app/components/UI/Icon/Icon"
import useDeviceWidth from "hooks/useDeviceWidth"
import {DeviceWidths} from "hooks/useResizeObserverEntry"
import {ReactNode} from "react"
import {NavLink, useLocation} from "react-router-dom"
import {classWithModifiers} from "utils/common"

/**
 *
 * This component is mobile oriented
 */
function MobileNavigator() {
  const [isMobile] = useDeviceWidth(DeviceWidths.Mobile)
  if (!isMobile) return null
  const {pathname} = useLocation()

  return (
    <nav className="mobile-navigator">
      <MobileNavigatorLink iconName="search-filled" to="/">
        Главная
      </MobileNavigatorLink>
      <MobileNavigatorLink iconName="bookmark" to={pathname}>
        Избранное
      </MobileNavigatorLink>
      <MobileNavigatorLink iconName="hammer" to="/lots/draft">
        Разместить лот
      </MobileNavigatorLink>
      <MobileNavigatorLink iconName="bell" to="/notifications/lots">
        Уведомления
      </MobileNavigatorLink>
      <MobileNavigatorLink iconName="user" to="/profile/personal">
        Профиль
      </MobileNavigatorLink>
    </nav>
  )
}

interface MobileNavigatorLinkProps {
  iconName: IconName
  to: string
  children: ReactNode
}

function MobileNavigatorLink(props: MobileNavigatorLinkProps) {
  return (
    <NavLink
      className={link =>
        classWithModifiers("mobile-navigator-link", link.isActive && "active")
      }
      to={props.to}
      end>
      <div className="mobile-navigator-link__circle">
        <Icon className="mobile-navigator-link__icon" name={props.iconName} />
      </div>
      <div className="mobile-navigator-link__label">{props.children}</div>
    </NavLink>
  )
}

export default MobileNavigator
