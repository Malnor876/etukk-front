import "./Specifications.scss"

import CloseButton from "app/components/UI/CloseButton/CloseButton"
import Icon from "app/components/UI/Icon/Icon"
import Input from "app/components/UI/Input/Input"
import {Dispatch, useRef, useState} from "react"
import {inputValue} from "utils/common"

export const DEFAULT_SPECIFICATIONS: SpecificationType[] = [
  {
    id: 0,
    key: "Длина (м)",
    value: "",
    required: true,
    disabledKey: true,
    number: true,
    max: "2,6",
    min: "0.01",
  },
  {
    id: 1,
    key: "Ширина (м)",
    value: "",
    required: true,
    disabledKey: true,
    number: true,
    max: "1.3",
    min: "0.01",
  },
  {
    id: 2,
    key: "Высота (м)",
    value: "",
    required: true,
    disabledKey: true,
    number: true,
    max: "1.5",
    min: "0.01",
  },
  {
    id: 3,
    key: "Вес (кг)",
    value: "",
    required: true,
    disabledKey: true,
    number: true,
    max: "1400",
  },
  {id: 4, key: "", value: ""},
]

export interface SpecificationType {
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
  max?: string
  min?: string
}

interface SpecificationsProps {
  name?: string
  max?: number
  required?: boolean
  defaultValue?: SpecificationType[]
  onChange?: Dispatch<SpecificationType[]>
  onChangeEdit?: (newSpecifications: SpecificationType[]) => void
}

function Specifications(props: SpecificationsProps) {
  console.log("Specifications", props)
  const [specifications, setSpecifications] = useState<SpecificationType[]>(
    props.defaultValue ?? DEFAULT_SPECIFICATIONS
  )
  const uniqueID = useRef(specifications.length - 1)

  function addSpecification(key: string, value: string) {
    const id = (uniqueID.current += 1)
    setSpecifications(state => [...state, {id, key, value}])
  }
  function removeSpecification(index: number) {
    specifications.splice(index, 1)
    setSpecifications([...specifications])
  }
  function editSpecification(index: number, next: Partial<SpecificationType>) {
    console.log("index", index)
    console.log("next", next)

    specifications[index] = {...specifications[index], ...next}
    console.log("specifications", specifications)

    setSpecifications([...specifications])
    const newSpecifications = specifications.filter(
      specification => specification.value !== ""
    )
    console.log("newSpecifications", newSpecifications)

    props.onChange
      ? props.onChange?.(newSpecifications)
      : props.onChangeEdit?.(newSpecifications)
  }

  function editSpecificationKey(index: number) {
    return (key: string) => editSpecification(index, {key})
  }
  function editSpecificationValue(index: number) {
    console.log("index", index)
    return (value: string) => editSpecification(index, {value})
  }

  return (
    <div className="specifications">
      <div className="specifications__container">
        {specifications.map((specification, index) => (
          <div className="specifications__specification" key={specification.id}>
            <Input
              placeholder="Название..."
              required
              name={`${props.name}[${specification.id}].key`}
              disabled={specification.disabledKey}
              defaultValue={specification.key}
              onChange={inputValue(editSpecificationKey(index))}
            />
            <Input
              placeholder="Значение..."
              required
              name={`${props.name}[${specification.id}].value`}
              type={specification.number ? "number" : undefined}
              step="0.01"
              max={specification.max}
              min={specification.min}
              width="225px"
              defaultValue={specification.value}
              onChange={inputValue(editSpecificationValue(index))}
            />
            {!specification.required && (
              <CloseButton onClick={() => removeSpecification(index)} />
            )}
          </div>
        ))}
      </div>
      {(props.max == null || specifications.length < props.max) && (
        <button
          className="specifications__add"
          type="button"
          onClick={() => addSpecification("", "")}>
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
