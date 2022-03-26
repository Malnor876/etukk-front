import Picker from "app/components/UI/Picker/Picker"
import TemporaryStorage from "infrastructure/persistence/TemporaryStorage"

function EditLotCategory() {
  const lotNewStorage = new TemporaryStorage("lot-new")
  const [category, setCategory] = lotNewStorage.state("category")
  return (
    <section>
      <h4>Выберите категорию</h4>
      <Picker defaultValue={category} onChange={setCategory}>
        <option value={1}>Траспорт</option>
        <option value={2}>Траспорт</option>
        <option value={3}>Детские товары</option>
        <option value={4}>Детские товары</option>
        <option value={5}>Мебель</option>
        <option value={6}>Бытовая техника</option>
        <option value={7}>Бытовая техника</option>
      </Picker>
    </section>
  )
}

export default EditLotCategory