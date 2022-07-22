import Input from "app/components/UI/Input/Input"
import InputAddress from "app/components/UI/Input/InputAddress"
import Radio from "app/components/UI/Radio/Radio"
import Selector from "app/components/UI/Selector/Selector"
import { Row } from "app/layouts/BaseLayouts/BaseLayouts"
import { inputValue } from "utils/common"
import { humanizeDate } from "utils/date"

import { lotDraftStorage } from "."
import { getBiddingTime } from "./helpers"

function EditLotTrade() {
  const [date, setDate] = lotDraftStorage.state("date", "")
  const [price, setPrice] = lotDraftStorage.state("price", "")
  const [city, setCity] = lotDraftStorage.state("city", "")
  const [delivery, setDelivery] = lotDraftStorage.state("delivery", "all")


  const [start1] = getBiddingTime(1)
  const [start2] = getBiddingTime(2)
  const [start3] = getBiddingTime(3)
  const [start4] = getBiddingTime(4)


  function asd(a: any, f: number) {
    const b = new Date(a)
    b.setHours(a.getHours() + f)
    return b
  }

  const end1 = asd(start1, 1)
  const end2 = asd(start2, 2)
  const end3 = asd(start3, 1)
  const end4 = asd(start4, 2)

  return (
    <section>
      <h2>Торги и доставка</h2>
      <p>Период публикации лота и проведения торгов</p>
      <Radio name="date" value="1" defaultChecked={date === "1"} onChange={setDate}>Сегодня {humanizeDate(start1)} - {end1.toLocaleString("ru", { hour: "2-digit", minute: "2-digit" })}</Radio>
      <br />
      <Radio name="date" value="2" defaultChecked={date === "2"} onChange={setDate}>Сегодня {humanizeDate(start2)} - {end2.toLocaleString("ru", { hour: "2-digit", minute: "2-digit" })}</Radio>
      <br />
      <Radio name="date" value="3" defaultChecked={date === "3"} onChange={setDate}>Завтра {humanizeDate(start3)} - {end3.toLocaleString("ru", { hour: "2-digit", minute: "2-digit" })}</Radio>
      <br />
      <Radio name="date" value="4" defaultChecked={date === "4"} onChange={setDate}>Завтра {humanizeDate(start4)} - {end4.toLocaleString("ru", { hour: "2-digit", minute: "2-digit" })}</Radio>
      <br />
      <br />
      <Row>
        <Input type="number" iconName="rub" placeholder="Введите  сумму..." maxLength={20} defaultValue={price} onInput={inputValue(setPrice)}>Укажите  сумму  минимальной ставки</Input>
        <InputAddress placeholder="Укажите адрес..." defaultValue={city} onInput={inputValue(setCity)}>Укажите ваш адрес</InputAddress>
      </Row>
      <br />
      <br />
      <Selector label="Выберите вариант возможной доставки" defaultValue={delivery} onChange={setDelivery}>
        <option value="all">Доставка в регионы</option>
        <option value="local">Доставка по городу продажи</option>
      </Selector>
    </section>
  )
}

export default EditLotTrade