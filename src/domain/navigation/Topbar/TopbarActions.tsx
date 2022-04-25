import FullscreenSignIn from "app/components/modals/auth/FullscreenSignIn"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Icon from "app/components/UI/Icon/Icon"
import MiniProfile from "app/components/UI/MiniProfile/MiniProfile"
import { Modal } from "modules/modal/controller"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

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
      <Link className="topbar-actions__action" to="/favourites/all"><Icon name="bookmark" /></Link>
      <Link className="topbar-actions__action" to="/notifications"><Icon name="bell" /></Link>
      <MiniProfile user={user} />
    </div>
  )
}

export default TopbarActions
