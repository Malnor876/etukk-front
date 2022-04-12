import Input from "app/components/UI/Input/Input"
import Radio from "app/components/UI/Radio/Radio"
import Selector from "app/components/UI/Selector/Selector"
import { Row } from "app/layouts/BaseLayouts/BaseLayouts"
import { inputValue } from "utils/common"

import { lotNewStorage } from "."

function EditLotTrade() {
  const [date, setDate] = lotNewStorage.state("date", "")
  const [price, setPrice] = lotNewStorage.state("price", "")
  const [city, setCity] = lotNewStorage.state("city", "")
  const [delivery, setDelivery] = lotNewStorage.state("delivery", "all")
  return (
    <section>
      <h2>Торги и доставка</h2>
      <p>Период публикации лота и проведения торгов</p>
      <Radio name="date" value="21-09-21" defaultChecked onChange={setDate}>Сегодня 21.09.21 в 20:00 - 22:00</Radio>
      <br />
      <Radio name="date" value="21-09-21" defaultChecked onChange={setDate}>Сегодня 21.09.21 в 20:00 - 22:00</Radio>
      <br />
      <Radio name="date" value="21-09-21" defaultChecked onChange={setDate}>Сегодня 21.09.21 в 20:00 - 22:00</Radio>
      <br />
      <Radio name="date" value="21-09-21" defaultChecked onChange={setDate}>Сегодня 21.09.21 в 20:00 - 22:00</Radio>
      <br />
      <br />
      <Row>
        <Input type="number" iconName="rub" placeholder="Введите  сумму..." defaultValue={price} onInput={inputValue(setPrice)}>Укажите  сумму  минимальной ставки</Input>
        <Input placeholder="Ук ажите город..." defaultValue={city} onInput={inputValue(setCity)}>Укажите ваш город</Input>
      </Row>
      <br />
      <br />
      <Selector label="Выберите вариант возможной доставки" defaultValue={delivery} onChange={setDelivery}>
        <option value="all">Доставка в регионы</option>
        <option value="locally">Доставка по городу продажи</option>
      </Selector>
    </section>
  )
}

export default EditLotTrade