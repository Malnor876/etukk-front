import "./OrderDelivery.scss"

import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Textarea from "app/components/UI/Textarea/Textarea"
import { Row } from "app/layouts/BaseLayouts/BaseLayouts"
import Entry from "app/layouts/Entries/Entry"
import Form from "app/layouts/Form/Form"
import { Link } from "react-router-dom"

interface OrderDeliveryProps { }

function OrderDelivery(props: OrderDeliveryProps) {
  return (
    <div className="order-delivery">
      <div className="order-delivery__header">
        <Backward>ОФОРМИТЬ доставку И ОПЛАТИТЬ</Backward>
        <time className="order-delivery__time">14:02</time>
      </div>
      <Entry>
        <span>Стоимость лота по результатам торгов</span>
        <big>11 000 ₽</big>
      </Entry>
      <Entry>
        <span>“Безопасная сделка” и комиссия площадки</span>
        <big>1030 ₽</big>
      </Entry>
      <p className="order-delivery__text">
        Для расчета стоимости доставки заполните следующие поля.
        <br />
        Внимание! Пожалуйста укажите актуальные дату, время, адрес и номер телефона.
        После нажатия кнопки “оплатить”,они будут переданы службу доставки.
        <br />
        <Link to="/support">Посмотреть стоимость доставки по зонам</Link>
      </p>
      <Form>
        <Row>
          <Input type="date" placeholder="Дата доставки" iconName="calendar" />
          <Input type="time" placeholder="Время забора" iconName="pending" />
        </Row>
        <Input placeholder="Адрес доставки" />
        <Input placeholder="Номер телефона" />
        <Textarea placeholder="Комментарий" />
      </Form>
      <Entry>
        <span>Стоимость доставки лота по указанному адресу</span>
        <big>500 ₽</big>
      </Entry>
      <Entry>
        <big>ИТОГО К ОПЛАТЕ</big>
        <big>12 530 ₽</big>
      </Entry>
      <Button>Оплатить</Button>
    </div>
  )
}

export default OrderDelivery
