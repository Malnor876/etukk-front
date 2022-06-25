import "./OrderDelivery.scss"

import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import CountableTimer from "app/components/UI/CountableTimer/CountableTimer"
import Input from "app/components/UI/Input/Input"
import Textarea from "app/components/UI/Textarea/Textarea"
import { Row } from "app/layouts/BaseLayouts/BaseLayouts"
import Entry from "app/layouts/Entries/Entry"
import Form, { FormState } from "app/layouts/Form/Form"
import { Modal } from "modules/modal/controller"
import { useState } from "react"
import { offsetDateMinutes } from "utils/date.helpers"
import { Price } from "utils/extensions"

import DialogCheckoutSuccessful from "../DialogCheckoutSuccessful"

enum FormInputs {
  date = "date",
  time = "time",
  address = "address",
  phone = "phone",
  comment = "comment",
}

interface OrderDeliveryProps {
  lotCost: number
  tax: number
  deliveryCost: number

  onSubmit?(values: FormState<FormInputs, string>["values"]): Promise<void>
}

function OrderDelivery(props: OrderDeliveryProps) {
  const [pending, setPending] = useState(false)
  async function onSubmit(state: FormState<FormInputs, string>) {
    setPending(true)
    await props.onSubmit?.(state.values)
    setPending(false)

    Modal.open(DialogCheckoutSuccessful)
  }
  const totalPrice = props.lotCost + props.tax + props.deliveryCost
  return (
    <Form className="order-delivery" onSubmit={onSubmit}>
      <div className="order-delivery__header">
        <Backward>ОФОРМИТЬ ДОСТАВКУ И ОПЛАТИТЬ</Backward>
        <time className="order-delivery__time"><CountableTimer until={offsetDateMinutes(new Date, 15)} slice={[2]} /></time>
      </div>
      <div className="order-delivery__column">
        <Entry>
          <span>Стоимость лота <br /> по результатам торгов</span>
          <big>{Price.format(props.lotCost)}</big>
        </Entry>
        <hr />
        <Entry>
          <span>“Безопасная сделка” <br /> и комиссия площадки</span>
          <big>{Price.format(props.tax)}</big>
        </Entry>
        <hr />
      </div>
      <p className="order-delivery__text">
        Для расчета стоимости доставки заполните следующие поля.
        <br />
        Внимание! Пожалуйста укажите актуальные дату, время, адрес и номер телефона.
        После нажатия кнопки “оплатить”,они будут переданы службу доставки.
        <br />
      </p>
      <div className="order-delivery__inputs">
        <Row>
          <Input type="date" name={FormInputs.date} required placeholder="Дата доставки" />
          <Input type="time" name={FormInputs.time} required placeholder="Время забора" />
        </Row>
        <Input name={FormInputs.address} required placeholder="Адрес доставки" />
        <Input type="tel" name={FormInputs.phone} required placeholder="Номер телефона" defaultValue="+7" />
        <Textarea rows={10} name={FormInputs.time} placeholder="Комментарий" />
      </div>
      <div className="order-delivery__column">
        <Entry>
          <span>Стоимость доставки лота по указанному адресу</span>
          <big>{Price.format(props.deliveryCost)}</big>
        </Entry>
        <hr />
        <Entry>
          <big style={{ color: "#333" }}>ИТОГО К ОПЛАТЕ</big>
          <big>{Price.format(totalPrice)}</big>
        </Entry>
      </div>
      <div>
        <Button type="submit" pending={pending}>Оплатить</Button>
      </div>
    </Form>
  )
}

export default OrderDelivery
