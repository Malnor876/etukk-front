import "./Textarea.scss"

import { HTMLAttributes } from "react"
import { classMerge } from "utils/common"

interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> { }

function Textarea(props: TextareaProps) {
  return (
    <label className="textarea">
      {props.children && (
        <div className="textarea__label">{props.children}</div>
      )}
      <textarea {...props} className={classMerge("textarea__appearance", props.className)} />
    </label>
  )
}

export default Textarea
