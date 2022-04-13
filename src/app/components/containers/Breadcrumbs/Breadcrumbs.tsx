import "./Breadcrumbs.scss"

import { useLocation } from "react-router"

const significantRoutes = ["user", "favourites", "notifications", "lots", "profile"]
const significantRoutesStrings: Record<string, string> = {
  user: "Пользователь",
  favourites: "Избранное",
  lots: "Лоты",
  sellers: "Продавцы",
  pending: "Ожидающие",
  bidding: "Торги",
  sold: "Проданы",
  notifications: "Уведомления",
  new: "Новый",
  profile: "Мебель / Стулья / Карточка лота / Сделать ставку"
}

const exclude = ["personal", "bids", "sales", "purchases", "password", "services", "settings", "exit", "outbids", "reviews"]

function Breadcrumbs() {
  const location = useLocation()
  const routes = location.pathname.split("/").filter(Boolean)
  exclude.forEach(ex => {
    const index = routes.indexOf(ex)
    if (index === -1) return

    routes.splice(index, 1)
  })
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
