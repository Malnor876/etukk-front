import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Switcher from "app/components/UI/Switcher/Switcher"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { getCabinetFavorite, getCabinetFavoriteUsers } from "infrastructure/persistence/api/data/actions"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { Outlet, Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function FavouritesView() {
  return (
    <>
      <h2 className="heading">избранное</h2>
      <Buttons>
        <ButtonLink small outline nav to="all">Лоты</ButtonLink>
        <ButtonLink small outline nav to="sellers">Продавцы</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="all/*" element={
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
          <Route index element={<FavouritesLotsAllContainer />} />
        </Route>
        <Route path="sellers" element={<FavouritesSellersContainer />} />
      </Routes>
    </>
  )
}

function FavouritesLotsAllContainer() {
  return (
    <QueryContainer action={getCabinetFavorite()} mapping={mapLotsLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

function FavouritesSellersContainer() {
  return (
    <QueryContainer action={getCabinetFavoriteUsers()} mapping={mapLotsLists}>
      {payload => (
        <Previews>
          {payload.items.map(lot => (
            <LotPreview {...lot} key={lot.id} />
          ))}
        </Previews>
      )}
    </QueryContainer>
  )
}

export default FavouritesView
