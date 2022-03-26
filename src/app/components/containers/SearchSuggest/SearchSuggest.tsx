import "./SearchSuggest.scss"

import DropDown from "app/components/UI/DropDown/DropDown"
import Search from "app/components/UI/Search/Search"
import useClickAway from "hooks/useClickAway"
import { ComponentProps, Dispatch, ReactElement, useRef, useState } from "react"

interface SearchSuggestProps {
  width?: string
  disabled?: boolean
  placeholder?: string
  children: ReactElement<ComponentProps<"option">>[]
  onSubmit?: Dispatch<string>
}

function SearchSuggest(props: SearchSuggestProps) {
  const parentRef = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState("")
  const [expanded, setExpanded] = useState(false)
  function updateValue(value: string) {
    if (value.length === 0) return

    props.onSubmit?.(value)
    setValue(value)
    setExpanded(false)
  }
  useClickAway(parentRef, () => setExpanded(false))
  return (
    <div className="search-suggest" style={{ "--search-width": props.width }} ref={parentRef}>
      <Search
        name="search"
        placeholder={props.placeholder}
        value={value}
        onFocus={() => setExpanded(true)}
        onChange={event => setValue(event.currentTarget.value)}
        onSubmit={updateValue}
      />
      <DropDown expanded={expanded} onChange={updateValue}>{props.children}</DropDown>
    </div>
  )
}

export default SearchSuggest
