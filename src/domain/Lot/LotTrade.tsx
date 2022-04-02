import "./Lot.scss"

import Backward from "app/components/UI/Backward/Backward"
import Icon from "app/components/UI/Icon/Icon"
import Entries from "app/layouts/Entries/Entries"
import Entry from "app/layouts/Entries/Entry"
import { ReactNode } from "react"
import { humanizeDate } from "utils/date"

import { LotTradeType } from "./types"

interface LotTradeProps extends LotTradeType {
  children?: ReactNode
}

function LotTrade(props: LotTradeProps) {
  return (
    <div className="lot-trade">
      <Backward>{props.title}</Backward>
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