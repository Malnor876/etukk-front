import "./Breadcrumbs.scss"

import { useLocation } from "react-router"

const significantRoutes = ["user", "favourites"]
const significantRoutesStrings: Record<string, string> = {
  user: "Пользователь",
  favourites: "Избранное",
  lots: "Лоты",
  sellers: "Продавцы",
  pending: "Ожидающие",
  bidding: "Торги",
  sold: "Проданы",
}

function Breadcrumbs() {
  const location = useLocation()
  const routes = location.pathname.split("/").filter(Boolean)
  if (routes.every(route => !significantRoutes.includes(route))) {
    return null
  }
  return (
    <div className="breadcrumbs">
      {routes.map((route, index) => (
        <div className="breadcrumbs__chunk" key={index}>{significantRoutesStrings[route] || route}</div>
      ))}
    </div>
  )
}

export default Breadcrumbs