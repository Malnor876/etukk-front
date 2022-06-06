import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import SortingToggle from "app/components/UI/SortingToggle/SortingToggle"
import Switcher from "app/components/UI/Switcher/Switcher"
import Buttons from "app/layouts/Buttons/Buttons"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { LotStatus } from "domain/Lot/types"
import SellerPreview from "domain/seller/SellerPreview/SellerPreview"
import { getUserFavoriteLot, getUserFavoriteUser } from "infrastructure/persistence/api/data/actions"
import { mapLotPreview } from "infrastructure/persistence/api/mappings/lots"
import { mapUser } from "infrastructure/persistence/api/mappings/user"
import { useState } from "react"
import { Outlet, Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function FavouritesView() {
  const [sortingLots, setSortingLots] = useState<"all" | "new" | null>(null)
  const [sortingOrganization, setSortingOrganization] = useState<"user" | "organization" | null>(null)
  return (
    <>
      <h2 className="heading">избранное</h2>
      <Buttons>
        <ButtonLink small outline nav to="lots">Лоты</ButtonLink>
        <ButtonLink small outline nav to="sellers">Продавцы</ButtonLink>
      </Buttons>
      <Routes>
        <Route path="lots/*" element={(
          <QueryContainer action={getUserFavoriteLot(sortingLots ? {} : undefined)} key="lots">
            {all => {
              const sold = all.filter(item => item.lot.status === LotStatus.SOLD)
              return (
                <Routes>
                  <Route element={(
                    <>
                      <Switcher>
                        <NavLink to="" end>Все ({all.length})</NavLink>
                        <NavLink to="pending">Ожидающие (2)</NavLink>
                        <NavLink to="trading">Торги (0)</NavLink>
                        <NavLink to="sold">Проданы ({sold.length})</NavLink>
                      </Switcher>
                      <SortingToggle onChange={value => setSortingLots(value as never)}>
                        <option value="all">Все лоты</option>
                        <option value="new">Cначала новые</option>
                      </SortingToggle>
                      <Outlet />
                    </>
                  )}>
                    <Route index element={(
                      <Previews>
                        {all.map(item => (
                          <LotPreview {...mapLotPreview(item.lot)} key={item.id} />
                        ))}
                      </Previews>
                    )} />
                    <Route path="pending" element={(
                      <Previews>
                        {all.map(item => (
                          <LotPreview {...mapLotPreview(item.lot)} key={item.id} />
                        ))}
                      </Previews>
                    )} />
                    <Route path="trading" element={(
                      <Previews>
                        {all.map(item => (
                          <LotPreview {...mapLotPreview(item.lot)} key={item.id} />
                        ))}
                      </Previews>
                    )} />
                    <Route path="sold" element={(
                      <Previews>
                        {sold.map(item => (
                          <LotPreview {...mapLotPreview(item.lot)} key={item.id} />
                        ))}
                      </Previews>
                    )} />
                  </Route>
                </Routes>
              )
            }}
          </QueryContainer>
        )} />
        <Route path="sellers" element={(
          <QueryContainer action={getUserFavoriteUser(sortingOrganization ? { fav_user__organization: sortingOrganization === "organization" } : undefined)} key="sellers">
            {payload => (
              <>
                <SortingToggle onChange={value => setSortingOrganization(value as never)}>
                  <option value="user">Частные лица</option>
                  <option value="organization">Юридические лица</option>
                </SortingToggle>
                <Previews>
                  {payload.map(item => (
                    <SellerPreview dislikes={1} likes={2} {...mapUser(item.fav_user)} key={item.id} />
                  ))}
                </Previews>
              </>
            )}
          </QueryContainer>
        )} />
      </Routes>
    </>
  )
}


// interface FavouritesLotsContainerProps {
//   status: LotStatus
// }

// function FavouritesLotsContainer(props: FavouritesLotsContainerProps) {
//   return (
//     <QueryContainer action={getUserFavoriteLot()}>
//       {payload => (
//         <Previews>
//           {payload.map(item => (
//             <LotPreview {...mapLotPreview(item.lot)} key={item.id} />
//           ))}
//         </Previews>
//       )}
//     </QueryContainer>
//   )
// }

// function FavouritesSellersContainer() {
//   return (
//     <QueryContainer action={getUserFavoriteUser()} mapping={payload => payload.map(mapUser as never)}>
//       {payload => (
//         <Previews>
//           {payload.map(seller => (
//             <SellerPreview {...seller as any} key={seller.id} />
//           ))}
//         </Previews>
//       )}
//     </QueryContainer>
//   )
// }

export default FavouritesView
