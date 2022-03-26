import "./Filters.scss"

import { ReactError } from "app/components/services/ErrorBoundary/ErrorBoundary.errors"
import Checkbox, { CheckboxProps } from "app/components/UI/Checkbox/Checkbox"
import Icon from "app/components/UI/Icon/Icon"
import Input from "app/components/UI/Input/Input"
import Radio, { RadioProps } from "app/components/UI/Radio/Radio"
import ToolTip from "app/components/UI/ToolTip/ToolTip"
import { Row } from "app/layouts/BaseLayouts/BaseLayouts"
import _ from "lodash"
import { ChangeEvent, Children, cloneElement, Dispatch, ReactElement, ReactNode, useContext, useState } from "react"
import { classWithModifiers } from "utils/common"

import { FilterKey, FiltersState } from "./Filters.types"
import filtersContext from "./filtersContext"


interface FilterProps {
  group?: boolean
  label: ReactNode
  children: ReactNode
}

export function Filter(props: FilterProps) {
  const [expanded, setExpanded] = useState(false)
  const [contentHeight, setContentHeight] = useState<number>()
  return (
    <div className={classWithModifiers("filter", props.group && "group")} aria-label="filter" aria-details="toggle filter">
      <div className="filter__header" onClick={() => setExpanded(!expanded)}>
        <div className="filter__title">{props.label}</div>
        <Icon className={classWithModifiers("filter__icon", expanded && (props.group ? "rotate" : "up"))} name={props.group ? "plus" : "chevron"} />
      </div>
      <div
        className={classWithModifiers("filter__content", expanded && "expanded")}
        style={{ "--height": contentHeight }}
        ref={element => setContentHeight(element?.scrollHeight)}
        role="group"
        aria-expanded={expanded}>{props.children}</div>
    </div>
  )
}


interface FiltersToolboxProps {
  state: FiltersState
  onChange: Dispatch<FiltersState>
}

export function FiltersToolbox(props: FiltersToolboxProps) {
  const [filters, setFilters] = useContext(filtersContext)

  const reset = () => setFilters({})
  const onExpand = () => props.onChange(props.state === "expanded" ? undefined : "expanded")
  const onShrink = () => props.onChange("shrunken")
  return (
    <div className="filters-toolbox" role="toolbar">
      <button className="filters-toolbox__reset" disabled={Object.keys(filters).length === 0} type="reset" onClick={reset}>Сбросить</button>
      <button className="filters-toolbox__tool" type="button" onClick={onExpand}>
        <Icon name={props.state === "expanded" ? "rectangle" : "rectangle-double"} />
        <ToolTip>
          {props.state === "expanded" ? "Вернуть как было" : "Развернуть фильтр на весь экран"}
        </ToolTip>
      </button>
      <button className="filters-toolbox__tool" type="button" onClick={onShrink}>
        <Icon name="line" />
        <ToolTip>Свернуть фильтр</ToolTip>
      </button>
    </div>
  )
}


// interface FiltersProviderProps {
//   children: ReactNode
//   onChange: Dispatch<FiltersType>
// }

// function FiltersProvider(props: FiltersProviderProps) {
//   const reducer = useState<FiltersType>({})
//   useEffect(() => props.onChange(reducer[0]), [props.onChange, reducer[0]])
//   return (
//     <filtersContext.Provider value={reducer}>{props.children}</filtersContext.Provider>
//   )
// }

// export default FiltersProvider


interface FilterCheckboxesProps {
  name: FilterKey
  children: ReactElement<CheckboxProps>[]
}

export function FilterCheckboxes(props: FilterCheckboxesProps) {
  const [filters, setFilters] = useContext(filtersContext)
  const filterValue = (filters[props.name] || []) as string[]
  if (!(filterValue instanceof Array)) {
    throw new ReactError(FilterCheckboxes, `Got bad value. You probably used "${props.name}" somewhere else.`)
  }
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget
    if (target.checked === false) {
      return setFilters({ ...filters, [props.name]: filterValue.filter(chunk => chunk !== target.name) })
    }
    setFilters({ ...filters, [props.name]: [...new Set([...filterValue, target.name])] })
  }
  function reset() {
    setFilters(_.omit(filters, props.name))
  }
  return (
    <>
      <Checkbox onChange={reset} checked={filterValue.length === 0}>Все</Checkbox>
      {Children.map(props.children, child => (
        cloneElement<CheckboxProps>(child, { ...child.props, checked: filterValue.includes(child.props.name || ""), onChange })
      ))}
    </>
  )
}


interface FilterRadiosProps {
  name: FilterKey
  children: ReactElement<RadioProps>[]
}

export function FilterRadios(props: FilterRadiosProps) {
  const [filters, setFilters] = useContext(filtersContext)
  const filterValue = filters[props.name]
  function onChange(value: unknown) {
    setFilters({ ...filters, [props.name]: value })
  }
  function reset() {
    setFilters(_.omit(filters, props.name))
  }
  return (
    <>
      <Radio value="all" onChange={reset} checked={filterValue == null}>Все</Radio>
      {Children.map(props.children, child => (
        cloneElement<RadioProps>(child, { ...child.props, checked: filterValue === child.props.value, onChange })
      ))}
    </>
  )
}


interface FilterPriceRangeProps {
  name: FilterKey
}

export function FilterPriceRange(props: FilterPriceRangeProps) {
  const [filters, setFilters] = useContext(filtersContext)
  const [min, max] = (filters[props.name] || []) as (number)[]
  function setMin(value: number) {
    // if (value > max) value = min
    setFilters({ ...filters, [props.name]: [value, max] })
  }
  function setMax(value: number) {
    // if (value < min) value = max
    setFilters({ ...filters, [props.name]: [min, value] })
  }
  function onChangeFactory(factory: Dispatch<number>) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      const target = event.currentTarget
      factory(Number(target.value))
    }
  }
  return (
    <Row>
      <Input type="number" placeholder="Стоимость от" iconName="rub" value={min || ""} onInput={onChangeFactory(setMin)} />
      <Input type="number" placeholder="Стоимость до" iconName="rub" value={max || ""} onInput={onChangeFactory(setMax)} />
    </Row>
  )
}
