import LotPreview from "app/components/business/LotPreview/LotPreview"
import SellerPreview from "app/components/business/SellerPreview/SellerPreview"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Switcher from "app/components/UI/Switcher/Switcher"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import { Outlet, Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

import mockPNG from "./mock.png"
import mock2PNG from "./mock-2.png"

function FavouritesView() {
  return (
    <>
      <h2 className="heading">избранное</h2>
      <Buttons>
        <ButtonLink small outline to="lots">Лоты</ButtonLink>
        <ButtonLink small outline to="sellers">Продавцы</ButtonLink>
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
                  city="Москва"
                  title="ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ ЗАГОЛОВОК ВМЕСТИТСЯ 2 СТРОКИ НЕ БОЛЬШЕ"
                  image={mockPNG}
                  startBid={100}
                  startedAt={new Date}
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
                avatar={mock2PNG}
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
