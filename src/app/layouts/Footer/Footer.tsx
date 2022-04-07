import "./Footer.scss"

import OuterLink from "app/components/UI/OuterLink"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src="/static/images/logo.svg" alt="etukk logo" />
      </Link>
      <div className="footer__group">
        <Link className="footer__link" to="/favourites/lots">Избранное</Link>
        <Link className="footer__link" to="/lots/new/edit">Выставить лот</Link>
        <small>Все права защищены, 2022©</small>
      </div>
      <div className="footer__group">
        <Link className="footer__link" to="/notifications">Уведомления</Link>
        <Link className="footer__link" to="/user">Профиль</Link>
      </div>
      <div className="footer__group">
        <Link className="footer__link" to="/support">Тех. поддержка</Link>
        <Link className="footer__link" to="/about">О нас</Link>
      </div>
      <div className="footer__group">
        <OuterLink className="footer__link" to="tel:+7 (900) 999-99-99" noTarget>+7 (900) 999-99-99</OuterLink>
        <OuterLink className="footer__link" to="mailto:Etukk@mail.ru" noTarget>Etukk@mail.ru</OuterLink>
      </div>
    </footer>
  )
}


export default Footer
