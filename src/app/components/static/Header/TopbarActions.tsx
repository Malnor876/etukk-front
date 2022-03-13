import Button from "app/components/UI/Button/Button"
import Icon from "app/components/UI/Icon/Icon"
import { useState } from "react"
import { useSelector } from "react-redux"
import { classWithModifiers } from "utils/common"

import avatarPNG from "./avatar.png"

function TopbarActions() {
  const user = useSelector(state => state.user)
  // if (!user.auth) {
  //   return (
  //     <Button modifiers="outline">Авторизоваться</Button>
  //   )
  // }
  return (
    <div className="topbar-actions">
      <Button modifiers="outline">Выставить лот</Button>
      <button className="topbar-actions__action" type="button"><Icon name="bookmark" /></button>
      <button className="topbar-actions__action" type="button"><Icon name="bell" /></button>
      <MiniProfile />
    </div>
  )
}

function MiniProfile() {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="mini-profile">
      <img src={avatarPNG} alt="avatar" className="mini-profile__avatar" />
      <div className="mini-profile__name">Игорь</div>
      <button className="mini-profile__expand" type="button" onClick={() => setExpanded(!expanded)}>
        <Icon className={classWithModifiers("mini-profile__icon", expanded && "up")} name="chevron" />
      </button>
    </div>
  )
}

export default TopbarActions
