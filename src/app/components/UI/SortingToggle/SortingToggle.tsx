import "./SortingToggle.scss"

import PopupLayout from "app/layouts/Modal/PopupLayout/PopupLayout"
import { Modal } from "modules/modal/controller"
import { useModal } from "modules/modal/hook"
import { Dispatch, useState } from "react"

import Button from "../Button/Button"
import Icon from "../Icon/Icon"
import Selector from "../Selector/Selector"

const ll: Record<string, string> = {
  all: "Все отзывы",
  new: "Новые отзывы",
  positive: "Положительные",
  negative: "Отрицательные"
}

type SortValueType = string | undefined
interface SortingToggleProps {
  onChange?: Dispatch<SortValueType>
}

function SortingToggle(props: SortingToggleProps) {
  const [current, setCurrent] = useState("all")
  function onApply(value: SortValueType) {
    if (value == null) value = "all"

    props.onChange?.(value)
    setCurrent(value)
  }
  return (
    <button className="sorting-toggle" type="button" onClick={() => Modal.open(PopupApplyFilters, { onApply, weak: true })}>
      <div className="sorting-toggle__text">{ll[current]}</div>
      <Icon className="sorting-toggle__icon" name="sort" />
    </button>
  )
}


interface PopupApplyFiltersProps {
  onApply?: Dispatch<SortValueType>
}

function PopupApplyFilters(props: PopupApplyFiltersProps) {
  const { close } = useModal()
  const [value, setValue] = useState<SortValueType>()
  function onApply() {
    props.onApply?.(value)
    close()
  }
  return (
    <PopupLayout centered>
      <h3>Применить сортировку</h3>
      <Selector onChange={setValue}>
        <option value="all">Все отзывы</option>
        <option value="new">Новые отзывы</option>
        <option value="positive">Положительные</option>
        <option value="negative">Отрицательные</option>
      </Selector>
      <Button outline onClick={onApply}>Применить</Button>
    </PopupLayout>
  )
}

export default SortingToggle
