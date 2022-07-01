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

  return (
    <section>
      <h2>Торги и доставка</h2>
      <p>Период публикации лота и проведения торгов</p>
      <Radio name="date" value="1" defaultChecked={date === "1"} onChange={setDate}>Сегодня {humanizeDate(start1)} - {start1.getHours() + 1}:{start1.getMinutes()}</Radio>
      <br />
      <Radio name="date" value="2" defaultChecked={date === "2"} onChange={setDate}>Сегодня {humanizeDate(start2)} - {start2.getHours() + 2}:{start2.getMinutes()}</Radio>
      <br />
      <Radio name="date" value="3" defaultChecked={date === "3"} onChange={setDate}>Завтра {humanizeDate(start3)} - {start3.getHours() + 1}:{start3.getMinutes()}</Radio>
      <br />
      <Radio name="date" value="4" defaultChecked={date === "4"} onChange={setDate}>Завтра {humanizeDate(start4)} - {start4.getHours() + 2}:{start4.getMinutes()}</Radio>
      <br />
      <br />
      <Row>
        <Input type="number" iconName="rub" placeholder="Введите  сумму..." defaultValue={price} onInput={inputValue(setPrice)}>Укажите  сумму  минимальной ставки</Input>
        <InputAddress placeholder="Укажите город..." defaultValue={city} onInput={inputValue(setCity)}>Укажите ваш город</InputAddress>
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