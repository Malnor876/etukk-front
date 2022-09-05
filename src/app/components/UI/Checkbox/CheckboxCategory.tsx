import "./Checkbox.scss"

import {filterCategoryStorage} from "app/components/containers/Filters/Filters"
import {ChangeEvent, Dispatch, useEffect, useState} from "react"

import Icon from "../Icon/Icon"

export interface CheckboxCategoryProps {
  name: string
  child: {id: number; name: string; parent_category_id?: number | null}
  currentCategoryId?: number | null
  onChange?: Dispatch<number>
}

function CheckboxCategory(props: CheckboxCategoryProps) {
  const isChecked = props.currentCategoryId === props.child.parent_category_id
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(isChecked)
  }, [props])

  function onChange() {
    setChecked(true)
    filterCategoryStorage.set("filter-category", props.child.id)
    props.onChange && props.onChange(props.child.id)
  }
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={onChange}
      />
      <div className="checkbox__appearance">
        <Icon className="checkbox__icon" name="check" />
      </div>

      <div className="checkbox__label">{props.child.name}</div>
    </label>
  )
}

export default CheckboxCategory
