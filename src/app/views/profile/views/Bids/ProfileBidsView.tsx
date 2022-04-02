import Switcher from "app/components/UI/Switcher/Switcher"
import Previews from "app/layouts/Previews/Previews"
import { LOT_PREVIEW_MOCK } from "constants/mocks"
import LotPreview from "domain/Lot/LotPreview/LotPreview"
import { Route, Routes } from "react-router"
import { NavLink } from "react-router-dom"

function ProfileBidsView() {
  return (
    <>
      <Switcher>
        <NavLink to="" end>Побеждающие ставки (12)</NavLink>
        <NavLink to="outbids">Перебитые ставки (1)</NavLink>
      </Switcher>
      <Routes>
        <Route path="" element={(
          <>
            <Previews>
              {[...Array(12)].map((_, index) => (
                <LotPreview {...LOT_PREVIEW_MOCK} bookmarked={false} key={index} />
              ))}
            </Previews>
          </>
        )} />
        <Route path="outbids" element={(
          <>
            <Previews>
              <LotPreview {...LOT_PREVIEW_MOCK} bookmarked={false} />
            </Previews>
          </>
        )} />
      </Routes>
    </>
  )
}

export default ProfileBidsView
