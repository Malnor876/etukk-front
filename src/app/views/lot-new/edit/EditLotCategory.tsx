import QueryContainer from "app/components/containers/QueryContainer/QueryContainer"
import Button from "app/components/UI/Button/Button"
import Picker from "app/components/UI/Picker/Picker"
import { getCategory } from "infrastructure/persistence/api/data/actions"
import { useState } from "react"

import { lotNewStorage } from "."

/**
 * Poor code
 * 
 * TODO: Refactor in future
 */
function EditLotCategory() {
  const [flag, setFlag] = useState(true)
  const [category, setCategory] = lotNewStorage.state<number | null | undefined>("category")
  function updateCategory(value?: number | null) {
    setCategory(value)
    setFlag(!flag)
  }
  return (
    <section>
      <QueryContainer action={getCategory()}>
        {payload => {
          const { categoryItem, parentId, options } = breakDownCategories(payload, category)
          return (
            <>
              <h4>Выберите {categoryItem ? "под" : ""}категорию</h4>
              <Picker defaultValue={category} onChange={updateCategory}>
                {options.map(category => (
                  <option value={category.id} key={category.id}>{category.name}</option>
                ))}
              </Picker>
              <br />
              <br />
              {categoryItem && (
                <Button onClick={() => updateCategory(parentId)}>Вернуться к пред. категории</Button>
              )}
            </>
          )
        }}
      </QueryContainer>
    </section>
  )
}

export function breakDownCategories(categories: {
  id: number;
  name: string;
  parent_category_id?: number | null | undefined;
}[], categoryId: number | string | null | undefined) {
  const category = Number(categoryId)

  const categoryItem = categories.find(item => item.id === (category || null))
  const categoryChildren = categories.filter(item => item.parent_category_id === (category || null))

  const options = categoryChildren.length > 0 ? categoryChildren : categories.filter(item => item.parent_category_id === categoryItem?.parent_category_id)

  const parentId = Number(
    categoryChildren.length > 0 ? categoryItem?.parent_category_id : categories.find(item => item.id === categoryItem?.parent_category_id)?.parent_category_id
  )

  return {
    categoryItem,
    parentId,
    options
  }
}

export default EditLotCategory