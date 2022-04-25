import "./Specifications.scss"

import { Dispatch, useRef, useState } from "react"
import { inputValue } from "utils/common"

import CloseButton from "../CloseButton/CloseButton"
import Icon from "../Icon/Icon"
import Input from "../Input/Input"

interface SpecificationType {
  id?: number
  key: string
  value: string
}

interface SpecificationsProps {
  name?: string
  max?: number
  defaultValue?: SpecificationType[]
  onChange?: Dispatch<SpecificationType[]>
}

function Specifications(props: SpecificationsProps) {
  const uniqueID = useRef(0)
  const [specifications, setSpecifications] = useState<SpecificationType[]>(props.defaultValue || [{ id: uniqueID.current, key: "", value: "" }])
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
            <Input placeholder="Название..." required name={`${props.name}[${specification.id}].key`} defaultValue={specification.key} onChange={inputValue(editSpecificationKey(index))} />
            <Input placeholder="Значение..." required name={`${props.name}[${specification.id}].value`} defaultValue={specification.value} onChange={inputValue(editSpecificationValue(index))} />
            {index > 0 && (
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