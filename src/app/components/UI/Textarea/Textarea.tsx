import "./Textarea.scss"

import { HTMLAttributes } from "react"
import { classMerge } from "utils/common"

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> { }

function Textarea(props: TextareaProps) {
  return (
    <textarea {...props} className={classMerge("textarea", props.className)} />
  )
}

export default Textarea
