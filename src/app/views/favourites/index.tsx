import ButtonLink from "app/components/UI/Button/ButtonLink"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Switcher from "app/components/UI/Switcher/Switcher"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import { IMAGE_MOCKS, LOT_PREVIEW_MOCK } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import SellerPreview from "domain/seller/SellerPreview/SellerPreview"
import { Outlet, Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function FavouritesView() {
  return (
    <>
      <h2 className="heading">избранное</h2>
      <Buttons>
        <ButtonLink small outline nav to="lots">Лоты</ButtonLink>
        <ButtonLink small outline nav to="sellers">Продавцы</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="lots/*" element={
          <>
            <Switcher>
              <NavLink to="" end>Все (6)</NavLink>
              <NavLink to="pending">Ожидающие (2)</NavLink>
              <NavLink to="bidding">Торги (0)</NavLink>
              <NavLink to="sold">Проданы (4)</NavLink>
            </Switcher>
            <SortingToggle>
              <option value="all">Все отзывы</option>
              <option value="new">Новые отзывы</option>
              <option value="positive">Положительные</option>
              <option value="negative">Отрицательные</option>
            </SortingToggle>
            <Outlet />
          </>
        }>
          <Route index element={
            <Previews>
              {[...Array(16)].map((_, i) => (
                <LotPreview {...LOT_PREVIEW_MOCK} key={i} />
              ))}
            </Previews>
          } />
        </Route>
        <Route path="sellers" element={
          <Previews>
            {[...Array(16)].map((_, i) => (
              <SellerPreview
                id={i}
                avatar={IMAGE_MOCKS[1]}
                name="ИП ПОВЕЛИТЕЛЬ МЕБЕЛИ и мира в целом"
                city="Москва"
                likes={5}
                dislikes={1}
                lotsCount={1}
                key={i}
              />
            ))}
          </Previews>
        } />
      </Routes>
    </>
  )
}

export default FavouritesView
