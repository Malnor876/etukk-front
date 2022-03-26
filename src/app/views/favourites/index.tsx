import ButtonLink from "app/components/UI/Button/ButtonLink"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Switcher from "app/components/UI/Switcher/Switcher"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import { IMAGE_MOCKS } from "constants/mocks"
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
            <SortingToggle />
            <Outlet />
          </>
        }>
          <Route index element={
            <Previews>
              {[...Array(16)].map((_, i) => (
                <LotPreview
                  id={i}
                  city="Москва"
                  title="ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ"
                  image={IMAGE_MOCKS[0]}
                  price={100}
                  tradeStart={new Date}
                  bookmarked
                  key={i}
                />
              ))}
            </Previews>
          } />
        </Route>
        <Route path="sellers" element={
          <Previews>
            {[...Array(16)].map((_, i) => (
              <SellerPreview
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
