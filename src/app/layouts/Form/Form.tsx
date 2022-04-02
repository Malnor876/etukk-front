import "./Form.scss"

import _ from "lodash"
import { HTMLAttributes } from "react"
import { classWithModifiers } from "utils/common"

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  centered?: boolean
}

function Form(props: FormProps) {
  return (
    <form {..._.omit(props, "centered")} className={classWithModifiers("form", props.centered && "centered")} />
  )
}

export default Form
