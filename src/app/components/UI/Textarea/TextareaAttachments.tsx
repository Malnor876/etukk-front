import "./Textarea.scss"

import { FILE_TYPES } from "consts"
import _ from "lodash"
import { HTMLAttributes } from "react"
import { classMerge } from "utils/common"

import Icon from "../Icon/Icon"

interface TextareaAttachmentsProps extends HTMLAttributes<HTMLTextAreaElement> { }

function TextareaAttachments(props: TextareaAttachmentsProps) {
  return (
    <div className="textarea">
      {props.children && (
        <div className="textarea__label">{props.children}</div>
      )}
      <div className="textarea-attachments" aria-label="textarea with attachments">
        <textarea {..._.omit(props, "children")} className={classMerge("textarea__appearance", props.className)} />
        <label className="textarea-attachments__attach" aria-label="attach files" role="button" tabIndex={0}>
          <input className="textarea-attachments__input" type="file" multiple accept={FILE_TYPES.IMAGE.map(type => "." + type).join(",")} />
          <Icon name="clip" />
        </label>
      </div>
    </div>
  )
}

export default TextareaAttachments
