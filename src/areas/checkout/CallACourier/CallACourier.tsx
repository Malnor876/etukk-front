import "./CallACourier.scss"

import Backward from "app/components/UI/Backward/Backward"
import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import Textarea from "app/components/UI/Textarea/Textarea"
import Form, { FormState } from "app/layouts/Form/Form"
import { Modal } from "modules/modal/controller"
import { useState } from "react"
import { humanizeDate2 } from "utils/date"

import DialogCallACourierSuccessful from "../DialogCallACourierSuccessful"

enum FormInputs {
  date = "date",
  timeStart = "time-start",
  timeEnd = "time-end",
  address = "address",
  phone = "phone",
  comment = "comment",
}

interface CallACourierProps {
  // lotCost: number
  // tax: number
  // deliveryCost: number

  onSubmit?(values: FormState<FormInputs, string>["values"]): Promise<void>
}

function CallACourier(props: CallACourierProps) {
  const [pending, setPending] = useState(false)
  async function onSubmit(state: FormState<FormInputs, string>) {
    setPending(true)
    await props.onSubmit?.(state.values)
    setPending(false)

    Modal.open(DialogCallACourierSuccessful, { closable: false })
  }
  const nowDate = new Date
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
        <Input type="date" defaultValue={`${nowDateYear}-${nowDateMonth}-${nowDateDay}`} name={FormInputs.date} required placeholder="Дата забора груза">
          Покупатель указал: {humanizeDate2(nowDate)} / {humanizeDate2(nowDate)}
        </Input>
        <div className="call-a-courier__row">
          <Input type="time" name={FormInputs.timeStart} required placeholder="Время забора груза c">
            Покупатель указал: 18:30
          </Input>
          <Input type="time" name={FormInputs.timeEnd} required placeholder="Время забора по">
            Покупатель указал: 23:30
          </Input>
        </div>
        <Input name={FormInputs.address} required placeholder="Адрес, откуда забрать" />
        <Input type="tel" name={FormInputs.phone} required placeholder="Номер телефона" defaultValue="+7" />
        <Textarea rows={10} name={FormInputs.comment} placeholder="Комментарий" />
        <div>
          <Button type="submit" pending={pending}>Отправить</Button>
        </div>
      </div>
    </Form >
  )
}

export default CallACourier
