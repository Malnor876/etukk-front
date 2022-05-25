import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Picker from "app/components/UI/Picker/Picker"
import { getGetCategory } from "infrastructure/persistence/api/data/actions"

import { lotNewStorage } from "."

function EditLotCategory() {
  const [category, setCategory] = lotNewStorage.state("category")
  return (
    <section>
      <h4>Выберите категорию</h4>
      <QueryContainer action={getGetCategory()}>
        {payload => (
          <Picker defaultValue={category} onChange={setCategory}>
            {payload.result.map(category => (
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </Picker>
        )}
      </QueryContainer>
    </section>
  )
}

export default EditLotCategory