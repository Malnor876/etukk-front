import "./LotPreview.scss"

import Bookmark from "app/components/UI/Bookmark/Bookmark"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import CountableTimer from "app/components/UI/CountableTimer/CountableTimer"
import Icon, { IconName } from "app/components/UI/Icon/Icon"
import { LotPreviewType, LotStatus } from "domain/Lot/types"
import { ReactNode } from "react"
import { Link } from "react-router-dom"
import { humanizeDate } from "utils/date"

interface LotProps extends LotPreviewType {
  onClick?(): void
}

function LotPreview(props: LotProps) {
  return (
    <div className="lot-preview" onClick={props.onClick}>
      <>
        <img src={props.image} alt="preview" className="lot-preview__image" />
        <div className="lot-preview__info">
          <div className="lot-preview__title">{props.title}</div>
          <LotPreviewSwitchableInfo {...props} />
        </div>
        {props.onClick ?? (
          <Link className="ghost" to={`/lots/${props.id}`} />
        )}
        <Bookmark className="lot-preview__bookmark" type="lot" id={props.id} defaultValue={props.bookmarked} />
      </>
      {props.status === LotStatus.DRAFTED && (
        <ButtonLink to={`/lots/${props.id}/preview`}>Опубликовать черновик</ButtonLink>
      )}
    </div>
  )
}


/**
 * 
 * Switch info depending on `status`.
 * If returns `null`, it means that info should be empty; further parent modification may be needed.
 */
function LotPreviewSwitchableInfo(props: LotProps) {
  switch (props.status) {
    case LotStatus.CLOSED:
      return (
        <>
          {/* <LotPreviewStatus iconName="truck">В пути</LotPreviewStatus> */}
          <LotPreviewStatus iconName="not-allowed">Закрыт</LotPreviewStatus>
        </>
      )

    case LotStatus.DRAFTED:
      return null

    case LotStatus.MODERATION:
      return (
        <>
          <LotPreviewStatus iconName="pending">
            <span>Претензия на рассмотрении</span>
            <em><CountableTimer futureDate={props.tradeEndTime} /></em>
          </LotPreviewStatus>
        </>
      )

    case LotStatus.PUBLISHED:
      return (
        <>
          <div className="lot-preview__details">
            <div className="lot-preview__entry">
              <small>Всего ставок</small>
              <strong>{props.betsCount}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Начальная ставка</small>
              <strong>{props.startPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Текущая ставка</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Начало торгов</small>
              <strong>{humanizeDate(props.tradeStartTime)}</strong>
            </div>
          </div>
          <LotPreviewStatus iconName="check">Опубликован</LotPreviewStatus>
        </>
      )

    case LotStatus.REJECTED:
      return (
        <>
          <LotPreviewStatus iconName="not-allowed">Отклонен</LotPreviewStatus>
        </>
      )

    case LotStatus.SOLD:
      return (
        <>
          <LotPreviewStatus iconName="check">Продан</LotPreviewStatus>
        </>
      )

    default:
      return (
        <>
          <div className="lot-preview__city">
            <span>г. {props.city}</span>
            <Icon name="truck" />
          </div>
          <div className="lot-preview__details">
            <div className="lot-preview__entry">
              <small>Начальная ставка</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Начало торгов</small>
              <strong>{humanizeDate(props.tradeStartTime)}</strong>
            </div>
          </div>
        </>
      )
  }
}


interface LotPreviewStatusProps {
  iconName: IconName
  children: ReactNode
}

function LotPreviewStatus(props: LotPreviewStatusProps) {
  return (
    <div className="lot-preview-status">
      <Icon className="lot-preview-status__icon" name={props.iconName} />
      <div className="lot-preview-status__label">{props.children}</div>
    </div>
  )
}

export default LotPreview
