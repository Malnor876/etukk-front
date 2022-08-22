import FullscreenSignIn from "app/components/modals/auth/FullscreenSignIn"
import Button from "app/components/UI/Button/Button"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import Icon from "app/components/UI/Icon/Icon"
import MiniProfile from "app/components/UI/MiniProfile/MiniProfile"
import {Modal} from "react-modal-global"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"

function TopbarActions() {
  const user = useSelector(state => state.user)
  if (!user.auth) {
    return (
      <Button outline onClick={() => Modal.open(FullscreenSignIn)}>
        Авторизоваться
      </Button>
    )
  }
  return (
    <div className="topbar-actions">
      <ButtonLink small outline to="/lots/draft">
        Разместить лот
      </ButtonLink>
      <Link className="topbar-actions__action" to="/favourites/lots">
        <Icon name="bookmark" />
      </Link>
      <Link className="topbar-actions__action" to="/notifications/lots">
        <Icon name="bell" />
      </Link>
      <MiniProfile user={user} />
    </div>
  )
}

export default TopbarActions
