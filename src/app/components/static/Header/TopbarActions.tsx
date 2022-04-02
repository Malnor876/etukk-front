import FullscreenSignIn from "app/components/modals/auth/FullscreenSignIn"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Icon from "app/components/UI/Icon/Icon"
import { Modal } from "modules/modal/controller"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { classWithModifiers } from "utils/common"

import avatarPNG from "./avatar.png"

function TopbarActions() {
  const user = useSelector(state => state.user)
  if (!user.auth) {
    return (
      <Button outline onClick={() => Modal.open(FullscreenSignIn)}>Авторизоваться</Button>
    )
  }
  return (
    <div className="topbar-actions">
      <ButtonLink small outline to="/lots/new/edit">Выставить лот</ButtonLink>
      <Link className="topbar-actions__action" to="/favourites/lots"><Icon name="bookmark" /></Link>
      <Link className="topbar-actions__action" to="/notifications"><Icon name="bell" /></Link>
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
