import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Switcher from "app/components/UI/Switcher/Switcher"
import Previews from "app/layouts/Previews/Previews"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { mapLotsLists } from "infrastructure/persistence/api/mappings/lots"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function ProfileBidsView() {
  return (
    <>
      <Switcher>
        <NavLink to="" end>Побеждающие ставки (12)</NavLink>
        <NavLink to="outbids">Перебитые ставки (1)</NavLink>
      </Switcher>
      {/* <Routes>
        <Route path="" element={(
          <QueryContainer action={getCabinetLotsBets(15)} mapping={mapLotsLists}>
            {payload => (
              <Previews>
                {payload.items.map(lot => (
                  <LotPreview {...lot} key={lot.id} />
                ))}
              </Previews>
            )}
          </QueryContainer>
        )} />
        <Route path="outbids" element={(
          <QueryContainer action={getCabinetLotsBets(15)} mapping={mapLotsLists}>
            {payload => (
              <Previews>
                {payload.items.map(lot => (
                  <LotPreview {...lot} key={lot.id} />
                ))}
              </Previews>
            )}
          </QueryContainer>
        )} />
      </Routes> */}
    </>
  )
}

export default ProfileBidsView
