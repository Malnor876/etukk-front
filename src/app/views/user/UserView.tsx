import "./UserView.scss"

import { ReactError } from "app/components/containers/ErrorBoundary/ErrorBoundary.errors"
import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import Copy from "app/components/UI/Copy/Copy"
import CustomerRating from "app/components/UI/CustomerRating/CustomerRating"
import Review from "app/components/UI/Review/Review"
import Switcher from "app/components/UI/Switcher/Switcher"
import Previews from "app/layouts/Previews/Previews"
import Reviews from "app/layouts/Reviews/Reviews"
import { IMAGE_MOCKS, LOT_PREVIEW_MOCK } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { Route, Routes, useParams } from "react-router"
import { NavLink } from "react-router-dom"

function UserView() {
  const params = useParams<"userId">()
  if (params.userId == null) {
    throw new ReactError(UserView, "got no userId")
  }
  if (isNaN(+params.userId)) {
    throw new ReactError(UserView, "userId is not a number")
  }
  return (
    <div className="user-view">
      <div className="user-view__container">
        <div className="user-view__row">
          <h2 className="heading">Игорь</h2>
          <Copy>id1234765</Copy>
        </div>
        <div className="user-view__row">
          <div className="user-view__entry">Зарегистрирован 12.09.21</div>
          <div className="user-view__entry">Частное лицо / г. Москва</div>
        </div>
        <div className="user-view__general-info">
          <img src={IMAGE_MOCKS[2]} alt="avatar" className="user-view__avatar" />
          <div className="user-view__info">
            <CustomerRating sellerRating={5} buyerRating={5} />
            <div>
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        <Switcher>
          <NavLink to="" end>Отзывы(8)</NavLink>
          <NavLink to="placed">Размещенные лоты (1)</NavLink>
          <NavLink to="finished">Завершенные лоты (8)</NavLink>
        </Switcher>
        <Routes>
          <Route index element={(
            <Reviews>
              {[...Array(6)].map((_, index) => (
                <Review attachments={IMAGE_MOCKS} comment="Вообще шлак, на фото такое ощущение другой товар!" date={new Date} product="Дизайнерский стул..." user={{ id: index, avatar: IMAGE_MOCKS[1], firstName: "Сергей" }} key={index} />
              ))}
            </Reviews>
          )} />
          <Route path="placed" element={<Previews><LotPreview {...LOT_PREVIEW_MOCK} /></Previews>} />
          <Route path="finished" element={<Previews><LotPreview {...LOT_PREVIEW_MOCK} /></Previews>} />
        </Routes>
      </div>
      <div className="user-view__container">
        <Backward>НАЗАД</Backward>
        <div className="user-view__cover" />
      </div>
    </div>
  )
}

export default UserView