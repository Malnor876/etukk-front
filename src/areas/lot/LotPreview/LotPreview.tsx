import "./LotPreview.scss"

import Author from "app/components/UI/Author/Author"
import Bookmark from "app/components/UI/Bookmark/Bookmark"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import CountableTimer from "app/components/UI/CountableTimer/CountableTimer"
import Icon, { IconName } from "app/components/UI/Icon/Icon"
import { LotPreviewType, LotStatus, LotTradeStatus } from "areas/lot/types"
import { ReactNode, useState } from "react"
import { Link } from "react-router-dom"
import { humanizeDate } from "utils/date"
import { offsetDateDay } from "utils/date.helpers"

interface LotProps extends LotPreviewType {
  /**
   * Follow a general look of the Lot.
   * 
   * The look stays the same whatever `props` passed
   */
  lookalike?: boolean
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
      <LotPreviewSwitchableAction {...props} />
    </div>
  )
}


/**
 * 
 * Switch info depending on `status`.
 * If returns `null`, it means that info should be empty; further parent modification may be needed.
 */
function LotPreviewSwitchableInfo(props: LotProps) {
  const [ended, setEnded] = useState(Date.now() > props.tradeEndTime.getTime())
  const started = Date.now() > props.tradeStartTime.getTime()

  if (props.lookalike) {
    if (ended) {
      return (
        <>
          <div className="lot-preview__city">
            <span>г. {props.city}</span>
            <Icon name="truck" />
          </div>
          <div className="lot-preview__details lot-preview__details--short">
            <div className="lot-preview__entry">
              <small>Текущая ставка</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Окончания торгов</small>
              <strong>{humanizeDate(props.tradeEndTime)}</strong>
            </div>
          </div>
        </>
      )
    }
    if (started) {
      return (
        <>
          <div className="lot-preview__city">
            <span>г. {props.city}</span>
            <Icon name="truck" />
          </div>
          <div className="lot-preview__details lot-preview__details--short">
            <div className="lot-preview__entry">
              <small>Текущая ставка</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>До окончания торгов</small>
              <strong><CountableTimer until={props.tradeEndTime} onEnd={() => setEnded(true)} /></strong>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="lot-preview__city">
          <span>г. {props.city}</span>
          <Icon name="truck" />
        </div>
        <div className="lot-preview__details lot-preview__details--short">
          <div className="lot-preview__entry">
            <small>Начальная ставка</small>
            <strong>{props.startPrice.format()}</strong>
          </div>
          <div className="lot-preview__entry">
            <small>Начало торгов</small>
            <strong>{humanizeDate(props.tradeStartTime)}</strong>
          </div>
        </div>
      </>
    )
  }

  switch (props.tradeStatus) {
    case LotTradeStatus.AWAITING_PAYMENT:
      return (
        <>
          <div className="lot-preview__details">
            <Author {...props.seller} />
            <hr />
            <div className="lot-preview__entry">
              <small>Сумма выкупа</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
          </div>
          <LotPreviewStatus iconName="pending">Ожидает оплаты</LotPreviewStatus>
        </>
      )

    case LotTradeStatus.CONFIRMATION:
      return (
        <>
          <div className="lot-preview__details">
            <Author {...props.seller} />
            <hr />
            <div className="lot-preview__entry">
              <small>Сумма выкупа</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
          </div>
          <LotPreviewStatus iconName="cup">Выкуплен</LotPreviewStatus>
        </>
      )

    default:
      break
  }

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
          <div className="lot-preview__details">
            <div className="lot-preview__entry">
              <small>Моя ставка</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Начало торгов</small>
              <strong>{humanizeDate(props.tradeStartTime)}</strong>
            </div>
            <LotPreviewStatus iconName="pending">
              <span>На проверке</span>
              <em><CountableTimer until={props.tradeEndTime} /></em>
            </LotPreviewStatus>
          </div>
        </>
      )

    case LotStatus.PUBLISHED: {
      return (
        <>
          <div className="lot-preview__details">
            {started && (
              <>
                <div className="lot-preview__entry">
                  <small>До окончания торгов</small>
                  <strong><CountableTimer until={props.tradeEndTime} /></strong>
                </div>
                <hr />
                <div className="lot-preview__entry">
                  <small>Всего ставок</small>
                  <strong>{props.betsCount}</strong>
                </div>
              </>
            )}
            {!started && (
              <div className="lot-preview__entry">
                <small>Начало торгов</small>
                <strong>{humanizeDate(props.tradeStartTime)}</strong>
              </div>
            )}
            <div className="lot-preview__entry">
              <small>Начальная ставка</small>
              <strong>{props.startPrice.format()}</strong>
            </div>
            <div className="lot-preview__entry">
              <small>Текущая ставка</small>
              <strong>{props.currentPrice.format()}</strong>
            </div>
          </div>
          <LotPreviewStatus iconName="check-circle">Опубликован</LotPreviewStatus>
        </>
      )
    }

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


function LotPreviewSwitchableAction(props: LotProps) {
  if (props.lookalike) {
    return null
  }



  switch (props.tradeStatus) {
    case LotTradeStatus.AWAITING_SHIPMENT:
      return (
        <ButtonLink to={`unknown`}>
          <CountableTimer until={offsetDateDay(new Date, 1)} slice={[1]} />
          {" "}
          <span>Ожидает отправки</span>
        </ButtonLink>
      )

    case LotTradeStatus.PAID:
      return (
        <ButtonLink to={`confirm-delivery/${props.id}`}>
          <CountableTimer until={offsetDateDay(new Date, 1)} slice={[2]} />
          {" "}
          <span>Подтверждение продавцом</span>
        </ButtonLink>
      )

    case LotTradeStatus.AWAITING_PAYMENT:
      return (
        <ButtonLink to={`checkout/${props.id}`}>
          <CountableTimer until={offsetDateDay(new Date, 1)} slice={[2]} />
          {" "}
          <span>Оформить доставку и оплатить</span>
        </ButtonLink>
      )

    default:
      break
  }



  switch (props.status) {
    case LotStatus.DRAFTED:
      return (
        <ButtonLink to={`/lots/${props.id}/preview`}>Опубликовать черновик</ButtonLink>
      )

    default:
      return null
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
