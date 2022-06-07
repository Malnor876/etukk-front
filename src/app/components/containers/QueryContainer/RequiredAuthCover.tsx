// import "./RequiredAuthCover.scss"

import FullscreenSignIn from "app/components/modals/auth/FullscreenSignIn"
import Button from "app/components/UI/Button/Button"
import ErrorCover from "app/components/UI/ErrorCover/ErrorCover"
import { Modal } from "modules/modal/controller"

function RequiredAuthCover() {
  return (
    <ErrorCover>
      <p>Пока ничего нет, авторизуйтесь</p>
      <Button onClick={() => Modal.open(FullscreenSignIn)}>Войти</Button>
    </ErrorCover>
  )
}

export default RequiredAuthCover
