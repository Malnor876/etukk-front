import "./LotPreview.scss"

import Author from "app/components/UI/Author/Author"
import Bookmark from "app/components/UI/Bookmark/Bookmark"
import ButtonLink from "app/components/UI/Button/ButtonLink"
import CountableTimer from "app/components/UI/CountableTimer/CountableTimer"
import Icon, {IconName} from "app/components/UI/Icon/Icon"
import {LotInfoType, LotStatus, LotTradeStatus} from "areas/lot/types"
import {ReactNode, useState} from "react"
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {humanizeDate} from "utils/date"
import {offsetDateDay, offsetDateMinutes} from "utils/date.helpers"

import useDeliveryTimers from "../hooks/useDeliveryTimers"

interface LotProps extends LotInfoType {
  merchant?: "seller" | "buyer"
  /**
   * Follow a general look of the Lot.
   *
   * The look stays the same whatever `props` passed
   */
  lookalike?: boolean
  onClick?(): void
}

function LotPreview(props: LotProps) {
  const myId = useSelector(state => state.user).id
  const isMyLot = Number(myId) === Number(props.user_id)

  return (
    <div className="lot-preview" onClick={props.onClick}>
      <>
        <img src={props.image} alt="preview" className="lot-preview__image" />
        <div className="lot-preview__info">
          <div className="lot-preview__title">{props.title}</div>
          <LotPreviewSwitchableContent {...props} />
        </div>
        {props.onClick ?? <Link className="ghost" to={`/lots/${props.id}`} />}
        {!isMyLot && (
          <Bookmark
            className="lot-preview__bookmark"
            type="lot"
            id={props.id}
            defaultValue={props.bookmarked}
          />
        )}
      </>
    </div>
  )
}

/**
 *
 * Switch content relying on `status` or `tradeStatus`.
 */
function LotPreviewSwitchableContent(props: LotProps) {
  if (props.lookalike) {
    return <LotPreviewStatusLookALike {...props} />
  }

  if (props.tradeStatus !== LotTradeStatus.UNKNOWN) {
    return <LotPreviewTypeTradeStatusContent {...props} />
  }

  if (props.status !== LotStatus.UNKNOWN) {
    return <LotPreviewStatusContent {...props} />
  }

  return (
    <>
      <div className="lot-preview__city">
        <span>{props.city}</span>
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

function LotPreviewStatusLookALike(props: LotProps) {
  const [ended, setEnded] = useState(Date.now() > props.tradeEndTime.getTime())
  const started = Date.now() > props.tradeStartTime.getTime()

  if (ended) {
    return (
      <>
        <div className="lot-preview__city">
          <span>{props.city}</span>
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
          <span>{props.city}</span>
          <Icon name="truck" />
        </div>
        <div className="lot-preview__details lot-preview__details--short">
          <div className="lot-preview__entry">
            <small>Текущая ставка</small>
            <strong>{props.currentPrice.format()}</strong>
          </div>
          <div className="lot-preview__entry">
            <small>До окончания торгов</small>
            <strong>
              <CountableTimer
                until={props.tradeEndTime}
                onEnd={() => setEnded(true)}
              />
            </strong>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="lot-preview__city">
        <span>{props.city}</span>
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

function LotPreviewStatusContent(props: LotProps) {
  const started = Date.now() > props.tradeStartTime.getTime()

  switch (props.status) {
    case LotStatus.CLOSED:
      return (
        <>
          {/* <LotPreviewStatus iconName="truck">В пути</LotPreviewStatus> */}
          <LotPreviewStatus iconName="not-allowed">Не продан</LotPreviewStatus>
        </>
      )

    case LotStatus.DRAFTED:
      return (
        <>
          {props.archived ? (
            <LotPreviewStatus>Снят с публикации</LotPreviewStatus>
          ) : (
            <ButtonLink publish to={`/lots/${props.id}/preview`}>
              Опубликовать черновик
            </ButtonLink>
          )}
        </>
      )

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
              <em>
                <CountableTimer until={props.tradeEndTime} />
              </em>
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
                  <strong>
                    <CountableTimer until={props.tradeEndTime} />
                  </strong>
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
          <LotPreviewStatus iconName="check-circle">
            Опубликован
          </LotPreviewStatus>
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
      return null
  }
}

function LotPreviewTypeTradeStatusContent(props: LotProps) {
  if (props.merchant === "seller") {
    return <LotPreviewSellerTradeStatusContent {...props} />
  }

  if (props.merchant === "buyer") {
    return <LotPreviewBuyerTradeStatusContent {...props} />
  }

  return null
}

function LotPreviewSellerTradeStatusContent(props: LotProps) {
  switch (props.tradeStatus) {
    case LotTradeStatus.AWAITING_PAYMENT:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="pending">Ожидает оплаты</LotPreviewStatus>
          <LotPreviewTimerButton {...props} type="fillDeliveryTimer" />
        </>
      )

    case LotTradeStatus.PAID:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="cup">Выкуплен</LotPreviewStatus>
          <LotPreviewTimerButton
            {...props}
            type="confirmDeliveryTimer"
            route="call-a-courier">
            Подтверждение продавцом
          </LotPreviewTimerButton>
        </>
      )

    case LotTradeStatus.AWAITING_SHIPMENT:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="cup">Выкуплен</LotPreviewStatus>
          <LotPreviewTimerButton {...props} type="confirmShipmentTimer">
            Ожидает отправки
          </LotPreviewTimerButton>
        </>
      )

    case LotTradeStatus.DELIVERY:
    case LotTradeStatus.CONFIRMATION:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="truck">В пути</LotPreviewStatus>
        </>
      )

    case LotTradeStatus.DELIVERED:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="check">Получен</LotPreviewStatus>
        </>
      )

    case LotTradeStatus.DELIVERY_REJECTED:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="not-allowed">Отклонен</LotPreviewStatus>
          {/* <LotPreviewStatus iconName="pending">
            Претензия на рассмотрении <br />
            <CountableTimer until={offsetDateMinutes(props.editedAt, 1 * 60 * 24 * 3)} />
          </LotPreviewStatus> */}
        </>
      )

    default:
      return null
  }
}

function LotPreviewBuyerTradeStatusContent(props: LotProps) {
  switch (props.tradeStatus) {
    case LotTradeStatus.AWAITING_PAYMENT:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="pending">Ожидает оплаты</LotPreviewStatus>
          <LotPreviewTimerButton
            {...props}
            type="fillDeliveryTimer"
            route="checkout">
            Оформить доставку и оплатить
          </LotPreviewTimerButton>
        </>
      )

    case LotTradeStatus.PAID:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="cup">Выкуплен</LotPreviewStatus>
          <LotPreviewTimerButton {...props} type="confirmDeliveryTimer">
            Подтверждение продавцом
          </LotPreviewTimerButton>
        </>
      )

    case LotTradeStatus.AWAITING_SHIPMENT:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="cup">Выкуплен</LotPreviewStatus>
          <LotPreviewTimerButton {...props} type="confirmShipmentTimer">
            Ожидает отправки
          </LotPreviewTimerButton>
        </>
      )
    case LotTradeStatus.DELIVERY:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="truck">В пути</LotPreviewStatus>
        </>
      )

    case LotTradeStatus.CONFIRMATION:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="delivery">
            Доставлен курьером
          </LotPreviewStatus>
          <LotPreviewTimerButton
            {...props}
            type="confirmDeliveryTimer"
            route="confirm-delivery">
            Подтвердить получение
          </LotPreviewTimerButton>
        </>
      )

    case LotTradeStatus.DELIVERED:
      return (
        <>
          <LotPreviewTradeStatusDetails {...props} />
          <LotPreviewStatus iconName="check">Получен</LotPreviewStatus>
        </>
      )

    default:
      return null
  }
}

// Helpers

function LotPreviewTradeStatusDetails(props: LotProps) {
  const AUTHOR =
    props.merchant === "seller"
      ? props.buyer && <Author {...props.buyer} />
      : props.seller && <Author {...props.seller} />
  return (
    <div className="lot-preview__details">
      {AUTHOR}
      <hr />
      <div className="lot-preview__entry">
        <small>Сумма выкупа</small>
        <strong>{props.currentPrice.format()}</strong>
      </div>
    </div>
  )
}

interface LotPreviewTradeStatusTimerButtonProps
  extends Pick<LotProps, "id" | "editedAt"> {
  type: keyof ReturnType<typeof useDeliveryTimers>
  route?: "call-a-courier" | "checkout" | "confirm-delivery"
  disabled?: boolean

  children?: ReactNode
}

function LotPreviewTimerButton(props: LotPreviewTradeStatusTimerButtonProps) {
  const [disabled, setDisabled] = useState(
    props.disabled || props.route == null
  )
  const deliveryTimers = useDeliveryTimers()

  const minutesOffset = deliveryTimers[props.type]
  const slice: [number?, number?] =
    props.type === "fillDeliveryTimer" ? [2] : [1]

  return (
    <ButtonLink to={`${props.route}/${props.id}`} disabled={disabled}>
      <CountableTimer
        until={offsetDateDay(props.editedAt, minutesOffset)}
        slice={slice}
        endLabel=""
        onEnd={() => setDisabled(true)}
      />
      {props.children && (
        <>
          {" "}
          <span>{props.children}</span>
        </>
      )}
    </ButtonLink>
  )
}

interface LotPreviewStatusProps {
  iconName?: IconName
  children: ReactNode
}

function LotPreviewStatus(props: LotPreviewStatusProps) {
  return (
    <div className="lot-preview-status">
      {props.iconName && (
        <Icon className="lot-preview-status__icon" name={props.iconName} />
      )}
      <div className="lot-preview-status__label">{props.children}</div>
    </div>
  )
}

export default LotPreview
