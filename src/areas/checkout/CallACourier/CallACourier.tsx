import "./CallACourier.scss"

import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Textarea from "app/components/UI/Textarea/Textarea"
import Form, { FormState } from "app/layouts/Form/Form"
import { LotInfoType } from "areas/lot/types"
import { useState } from "react"
import { humanizeDate2 } from "utils/date"


export enum CallACourierFormInputs {
  date = "date",
  time = "time",
  address = "address",
  phone = "phone",
  comment = "comment",
}

interface CallACourierProps {
  deliveryOrder: Required<LotInfoType>["deliveryOrder"]
  onSubmit?(values: FormState<CallACourierFormInputs, string>["values"]): Promise<void>
}

function CallACourier(props: CallACourierProps) {
  const [pending, setPending] = useState(false)
  async function onSubmit(state: FormState<CallACourierFormInputs, string>) {
    setPending(true)
    await props.onSubmit?.(state.values)
    setPending(false)
  }
  const nowDate = new Date(props.deliveryOrder.possibleShipmentDates)
  const nowDateYear = nowDate.getFullYear()
  const nowDateMonth = nowDate.toLocaleString("ru", { month: "2-digit" })
  const nowDateDay = nowDate.toLocaleString("ru", { day: "2-digit" })
  return (
    <Form onSubmit={onSubmit}>
      <Backward>
        <h2 className="heading">Вызвать курьера</h2>
      </Backward>
      <p>
        Укажите дату, время, актуальный адрес и номер телефона для забора и отправки товара.
        Обратите внимание на дату и время, которые указал покупатель! Для того, чтобы служба
        доставки смогла осуществить перевозку товара, вам нужно подстроиться под выбранное
        покупателем время.
      </p>
      <div className="call-a-courier__inputs">
        <Input type="date" defaultValue={`${nowDateYear}-${nowDateMonth}-${nowDateDay}`} name={CallACourierFormInputs.date} required placeholder="Дата забора груза">
          Покупатель указал: {humanizeDate2(nowDate)}
        </Input>
        <div className="call-a-courier__row">
          <Input type="time" name={CallACourierFormInputs.time} required>
            Покупатель указал: {props.deliveryOrder.possibleShipmentTimes}
          </Input>
        </div>
        <input type="hidden" name={CallACourierFormInputs.address} value={props.deliveryOrder.shipmentAddress} />
        <Input type="tel" name={CallACourierFormInputs.phone} required placeholder="Номер телефона" defaultValue="+7" />
        <Textarea rows={10} name={CallACourierFormInputs.comment} placeholder="Комментарий" />
        <div>
          <Button type="submit" pending={pending}>Отправить</Button>
        </div>
      </div>
    </Form >
  )
}

export default CallACourier
