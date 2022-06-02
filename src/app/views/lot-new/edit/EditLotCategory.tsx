import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import Picker from "app/components/UI/Picker/Picker"
import { getCategory } from "infrastructure/persistence/api/data/actions"
import { useState } from "react"

import { lotNewStorage } from "."

function EditLotCategory() {
  const [flag, setFlag] = useState(true)
  const [category, setCategory] = lotNewStorage.state<number | null | undefined>("category")
  function updateCategory(value?: number | null) {
    setCategory(value)
    setFlag(!flag)
  }
  return (
    <section>
      <h4>Выберите категорию</h4>
      <QueryContainer action={getCategory()}>
        {payload => {
          const categoryItem = payload.find(item => item.id === (category || null))
          const categoryChildren = payload.filter(item => item.parent_category_id === (category || null))

          const options = categoryChildren.length > 0 ? categoryChildren : payload.filter(item => item.parent_category_id === categoryItem?.parent_category_id)
          return (
            <>
              <Picker defaultValue={category} onChange={updateCategory}>
                {options.map(category => (
                  <option value={category.id} key={category.id}>{category.name}</option>
                ))}
              </Picker>
              <br />
              <br />
              {category != null && (
                <Button onClick={() => updateCategory(categoryChildren.length > 0 ? categoryItem?.parent_category_id : payload.find(item => item.id === categoryItem?.parent_category_id)?.parent_category_id)}>Вернуться к пред. категории</Button>
              )}
            </>
          )
        }}
      </QueryContainer>
    </section>
  )
}

export default EditLotCategory