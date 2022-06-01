import "./FullscreenAuth.scss"

import ButtonLink from "app/components/UI/Button/ButtonLink"
import FullscreenLayout from "app/layouts/Modal/FullscreenLayout/FullscreenLayout"
import { useModal } from "modules/modal/hook"

function FullscreenEmailConfirm() {
  const { close } = useModal()
  return (
    <FullscreenLayout className="fullscreen-auth">
      <div className="center">
        <h3 className="heading">ПОДТВЕРДИТЕ <br /> E-mail</h3>
        <p>
          Благодарим за подтверждение номера <br /> телефона.
          <br />
          <br />
          На указанную Вами почту отправлено письмо со<br /> ссылкой. Перейдите по ней, для подтверждения<br /> Е-mail адреса
        </p>
        <br />
        <ButtonLink to="/" onClick={close}>На главную</ButtonLink>
      </div>
    </FullscreenLayout>
  )
}

export default FullscreenEmailConfirm
