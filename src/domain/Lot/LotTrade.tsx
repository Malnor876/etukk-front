import "./Lot.scss"

import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import { ReactNode } from "react"
import { useNavigate } from "react-router"
import { humanizeDate } from "utils/date"

import { LotTradeType } from "./types"

interface LotTradeProps extends LotTradeType {
  children?: ReactNode
}

function LotTrade(props: LotTradeProps) {
  const navigate = useNavigate()
  return (
    <div className="lot-trade">
      <div className="lot-trade__header">
        <button className="lot-trade__backward" type="button" onClick={() => navigate(-1)}>
          <Icon name="chevron" />
        </button>
        <h2 className="lot-trade__title heading">{props.title}</h2>
      </div>
      <div className="lot-trade__city">
        <span>Москва</span>
        <Icon name="truck" />
      </div>
      <Entries>
        <Entry><span>Начальная ставка</span><big>{props.price.toPrice("ru", "rub")}</big></Entry>
        <Entry><span>Начало торгов</span><span>{humanizeDate("ru", props.tradeStart)}</span></Entry>
        <Entry><span>Окончание торгов</span><span>{humanizeDate("ru", props.tradeEnd)}</span></Entry>
      </Entries>
      {props.children}
    </div>
  )
}

export default LotTrade