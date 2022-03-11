import "./Inputs.scss"

import { HTMLAttributes } from "react"

interface FormProps extends HTMLAttributes<HTMLFormElement> { }

function Form(props: FormProps) {
  return (
    <form className="form">{props.children}</form>
  )
}

export default Form
