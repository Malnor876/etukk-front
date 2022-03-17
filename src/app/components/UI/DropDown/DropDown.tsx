import "./DropDown.scss"

import { Children, ComponentProps, ReactElement, useState } from "react"
import { classWithModifiers } from "utils/common"

interface DropDownProps<V> {
  name?: string
  default?: V
  expanded: boolean
  onChange(value: V, children: unknown): void

  children: ReactElement<ComponentProps<"option">>[]
}

function DropDown<V = string | undefined>(props: DropDownProps<V>) {
  const options = Children.map(props.children, child => child.props)
  const initChoice = props.default ? options.findIndex(option => option.value === props.default) : -1
  const [choice, Choose] = useState<number>(initChoice)
  return (
    <section className={classWithModifiers("drop-down", props.expanded && "expanded")} role="listbox" aria-expanded={props.expanded}>
      {options.map((option, index) => (
        <div
          className={classWithModifiers("drop-down__option", choice === index && "selected")}
          onClick={() => (Choose(index), props.onChange(option.value as unknown as V, option.children))}
          role="option"
          key={index}
        >{option.children}</div>
      ))}
      {props.name && (
        <input type="hidden" name={props.name} value={options[choice].value} />
      )}
    </section>
  )
}

export default DropDown
