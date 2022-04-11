import "./Selector.scss"

import useClickAway from "hooks/useClickAway"
import { Children, ComponentProps, Dispatch, ReactElement, ReactNode, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

import DropDown from "../DropDown/DropDown"
import Icon from "../Icon/Icon"

interface SelectorProps<V> {
  name?: string
  width?: string
  defaultValue?: V
  onChange?: Dispatch<V>
  children: ReactElement<ComponentProps<"option"> & { value: V }> | ReactElement<ComponentProps<"option"> & { value: V }>[]
  label?: ReactNode
}

function Selector<V = string | undefined>(props: SelectorProps<V>) {
  const options = Children.map(props.children, child => child.props)

  const parentRef = useRef<HTMLDivElement>(null)
  const [children, setChildren] = useState<ReactNode>(props.defaultValue && options.find(option => option.value === props.defaultValue)?.children || null)
  const [expanded, setExpanded] = useState(false)
  function onChange(value: V, children: ReactNode) {
    props.onChange?.(value)
    setChildren(children)
    setExpanded(false)
  }
  useClickAway(parentRef, () => setExpanded(false))
  return (
    <div className="selector" style={{ "--selector-width": props.width }} ref={parentRef}>
      {props.label && (
        <div className="selector__label">{props.label}</div>
      )}
      <button className="selector__appearance" type="button" onClick={() => setExpanded(!expanded)}>
        <div className={classWithModifiers("selector__current", !children && "empty")}>{children || "Выбрать из списка..."}</div>
        <Icon className={classWithModifiers("selector__icon", expanded && "up")} name="chevron" />
      </button>
      <DropDown name={props.name} default={props.defaultValue} expanded={expanded} onChange={onChange}>{props.children}</DropDown>
    </div>
  )
}

export default Selector
