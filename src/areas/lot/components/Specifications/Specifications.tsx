import "./Specifications.scss"

import CloseButton from "app/components/UI/CloseButton/CloseButton"
import Icon from "app/components/UI/Icon/Icon"
import Input from "app/components/UI/Input/Input"
import { Dispatch, useRef, useState } from "react"
import { inputValue } from "utils/common"

const DEFAULT_SPECIFICATIONS: SpecificationType[] = [
  { id: 0, key: "Длина (м)", value: "", required: true, disabledKey: true, number: true },
  { id: 1, key: "Ширина (м)", value: "", required: true, disabledKey: true, number: true },
  { id: 2, key: "Высота (м)", value: "", required: true, disabledKey: true, number: true },
  { id: 3, key: "Вес (кг)", value: "", required: true, disabledKey: true, number: true },
  { id: 4, key: "", value: "", required: true },
  // { id: 2, key: "", value: "" },
]

interface SpecificationType {
  id?: number
  key: string
  value: string
  /**
   * The key can't be overwritten and the field can't be deleted.
   * The value has to be filled.
   */
  required?: boolean
  disabledKey?: boolean
  number?: boolean
}

interface SpecificationsProps {
  name?: string
  max?: number
  defaultValue?: SpecificationType[]
  onChange?: Dispatch<SpecificationType[]>
}

function Specifications(props: SpecificationsProps) {
  const [specifications, setSpecifications] = useState<SpecificationType[]>(props.defaultValue ?? DEFAULT_SPECIFICATIONS)
  const uniqueID = useRef(specifications.length - 1)

  function addSpecification(key: string, value: string) {
    const id = uniqueID.current += 1
    setSpecifications(state => [...state, { id, key, value }])
  }
  function removeSpecification(index: number) {
    specifications.splice(index, 1)
    setSpecifications([...specifications])
  }
  function editSpecification(index: number, next: Partial<SpecificationType>) {
    specifications[index] = { ...specifications[index], ...next }
    setSpecifications([...specifications])

    props.onChange?.(specifications)
  }

  function editSpecificationKey(index: number) {
    return (key: string) => editSpecification(index, { key })
  }
  function editSpecificationValue(index: number) {
    return (value: string) => editSpecification(index, { value })
  }

  return (
    <div className="specifications">
      <div className="specifications__container">
        {specifications.map((specification, index) => (
          <div className="specifications__specification" key={specification.id}>
            <Input placeholder="Название..." required name={`${props.name}[${specification.id}].key`} disabled={specification.disabledKey} defaultValue={specification.key} onChange={inputValue(editSpecificationKey(index))} />
            <Input placeholder="Значение..." required name={`${props.name}[${specification.id}].value`} type={specification.number ? "number" : undefined} step="0.01" defaultValue={specification.value} onChange={inputValue(editSpecificationValue(index))} />
            {!specification.required && (
              <CloseButton onClick={() => removeSpecification(index)} />
            )}
          </div>
        ))}
      </div>
      {(props.max == null || (specifications.length < props.max)) && (
        <button className="specifications__add" type="button" onClick={() => addSpecification("", "")}>
          <div className="specifications__text">Добавить характеристику</div>
          <div className="specifications__circle">
            <Icon className="specifications__icon" name="plus" />
          </div>
        </button>
      )}
    </div>
  )
}

export default Specifications