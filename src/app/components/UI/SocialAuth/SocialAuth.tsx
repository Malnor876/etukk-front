import "./SocialAuth.scss"

import Icon from "app/components/UI/Icon/Icon"

function SocialAuth() {
  return (
    <div className="social-auth">
      <div className="social-auth__text">Войти через</div>
      <div className="social-auth__socials">
        <button type="button">
          <Icon name="yandex" />
        </button>
        <button type="button">
          <Icon name="google" />
        </button>
        <button type="button">
          <Icon name="vk" />
        </button>
        <button type="button">
          <Icon name="facebook" />
        </button>
        <button type="button">
          <Icon name="odnoklassniki" />
        </button>
        <button type="button">
          <Icon name="apple" />
        </button>
      </div>
    </div>
  )
}

export default SocialAuth
