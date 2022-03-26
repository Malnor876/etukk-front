import Button from "app/components/UI/Button/Button"
import Input from "app/components/UI/Input/Input"
import { Column, Row } from "app/layouts/BaseLayouts/BaseLayouts"
import { LotInfoType } from "domain/Lot/types"
import TemporaryStorage from "infrastructure/persistence/TemporaryStorage"
import { useState } from "react"

function EditLotSpecifications() {
  const lotNewStorage = new TemporaryStorage("lot-new")
  const [specifications, setSpecifications] = lotNewStorage.state<Partial<LotInfoType["specifications"]>>("specifications", [])
  const [amount, setAmount] = useState(Object.keys(specifications).length || 1)
  function updateSpecifications(index: number, entry: "key" | "value", value: string) {
    setSpecifications(state => {
      state[index] = { key: "", value: "", ...state[index], [entry]: value }
      return state.filter(d => d && (d.key || d.value))
    })
  }
  return (
    <section>
      <h4>Укажите характеристики</h4>
      <p>*не более 10 характеристик</p>
      <Column>
        {[...Array(amount)].map((_, index) => (
          <Row key={index}>
            <Input placeholder="Название..." defaultValue={specifications[index]?.key} onInput={event => updateSpecifications(index, "key", event.currentTarget.value)} />
            <Input placeholder="Значение..." defaultValue={specifications[index]?.value} onInput={event => updateSpecifications(index, "value", event.currentTarget.value)} />
          </Row>
        ))}
        {amount < 10 && (
          <div>
            <Button onClick={() => setAmount(amount + 1)}>Добавить характеристику</Button>
          </div>
        )}
      </Column>
    </section>
  )
}

export default EditLotSpecifications