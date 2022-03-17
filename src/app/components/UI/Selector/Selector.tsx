import "./Selector.scss"

import useClickAway from "hooks/useClickAway"
import { ComponentProps, Dispatch, ReactElement, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

import DropDown from "../DropDown/DropDown"
import Icon from "../Icon/Icon"

interface SelectorProps<V> {
  name?: string
  width?: string
  defaultValue?: string
  onChange?: Dispatch<V>
  children: ReactElement<ComponentProps<"option">>[]
}

function Selector<V = string | undefined>(props: SelectorProps<V>) {
  const parentRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  function onChange(value: V, children: string) {
    props.onChange?.(value)
    setCurrent(children)
    setExpanded(false)
  }
  useClickAway(parentRef, () => setExpanded(false))
  return (
    <div className="selector" style={{ "--selector-width": props.width }} ref={parentRef}>
      <div className="selector__appearance" onClick={() => setExpanded(!expanded)}>
        <div className="selector__current">{current || "Выбрать из списка..."}</div>
        <Icon className={classWithModifiers("selector__icon", expanded && "up")} name="chevron" />
      </div>
      <DropDown name={props.name} expanded={expanded} onChange={onChange}>{props.children}</DropDown>
    </div>
  )
}

export default Selector
