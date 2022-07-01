import { getAddressPrompt } from "infrastructure/persistence/api/data/actions"
import { FormEvent, useEffect, useState } from "react"
import { useQuery } from "react-fetching-library"

import Input, { InputProps } from "./Input"

function InputAddress(props: InputProps) {
  const [value, setValue] = useState<string>(props.defaultValue?.toString() ?? "")
  const response = useQuery(getAddressPrompt(value), false)
  function onInput(event: FormEvent<HTMLInputElement>) {
    const target = event.currentTarget

    setValue(target.value)
    props.onInput?.(event)
  }

  useEffect(() => {
    if (value.length === 0) return

    response.query()
  }, [value])
  return (
    <Input {...props} dataList={response.payload?.addresses ?? []} value={value} onInput={onInput} />
  )
}

export default InputAddress