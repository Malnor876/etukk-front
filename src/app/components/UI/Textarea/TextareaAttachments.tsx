import "./Textarea.scss"

import { FILE_TYPES } from "consts"
import { HTMLAttributes } from "react"

import Icon from "../Icon/Icon"
import Textarea from "./Textarea"

interface TextareaAttachmentsProps extends HTMLAttributes<HTMLTextAreaElement> { }

function TextareaAttachments(props: TextareaAttachmentsProps) {
  return (
    <div className="textarea-attachments">
      <Textarea {...props} />
      <label className="textarea-attachments__attach">
        <input className="textarea-attachments__input" type="file" multiple accept={FILE_TYPES.IMAGE.map(type => "." + type).join(",")} />
        <Icon name="clip" />
      </label>
    </div>
  )
}

export default TextareaAttachments
