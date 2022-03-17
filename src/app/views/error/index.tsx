import "./ErrorView.scss"

import ButtonLink from "app/components/UI/Button/ButtonLink"
import { useNavigate } from "react-router"

function ErrorView() {
  const navigate = useNavigate()
  return (
    <div className="error-view">
      <div className="error-view__container">
        <h1>404</h1>
        <div className="error-view__desc">
          <h3>Ошибка</h3>
          <h3>страницы не существует!</h3>
        </div>
        <ButtonLink color="white" to="/">На главную</ButtonLink>
        <button className="error-view__backward" type="button" onClick={() => navigate(-1)}>Вернуться назад</button>
      </div>
      <div className="error-view__icon">
        <img src="/static/images/logo.svg" alt="etukk logo" />
      </div>
    </div>
  )
}

export default ErrorView
