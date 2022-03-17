import "./SearchSuggest.scss"

import Search from "app/components/UI/Search/Search"
import useClickAway from "hooks/useClickAway"
import { Dispatch, useRef, useState } from "react"
import { classWithModifiers } from "utils/common"

interface SearchSuggestProps {
  width?: string
  disabled?: boolean
  placeholder?: string
  entries: string[]
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
      <div className={classWithModifiers("search-suggest__container", (props.entries.length > 0 && !props.disabled) && expanded && "expanded")}>
        <div className="search-suggest__entries">
          {props.entries.map((entry, index) => (
            <button className="search-suggest__entry" type="button" onClick={() => updateValue(entry)} key={index}>{entry}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchSuggest
