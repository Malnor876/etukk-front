import "./Textarea.scss"

import { FILE_TYPES } from "consts"
import _ from "lodash"
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import { classMerge } from "utils/common"

import Icon from "../Icon/Icon"

interface TextareaAttachmentsProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  width?: string
}

/**
 * When `name` is passed, attachments have its own name with suffix "attachments" -> `[name]-attachments`. 
 */
function TextareaAttachments(props: TextareaAttachmentsProps) {
  return (
    <div className="textarea">
      {props.children && (
        <div className="textarea__label">{props.children}</div>
      )}
      <div className="textarea-attachments" aria-label="textarea with attachments">
        <textarea {..._.omit(props, "children", "width")} style={{ "--textarea-width": props.width }} className={classMerge("textarea__appearance", props.className)} />
        <label className="textarea-attachments__attach" aria-label="attach files" role="button" tabIndex={0}>
          <input className="textarea-attachments__input" type="file" name={`${props.name}-attachments`} multiple accept={FILE_TYPES.IMAGE.map(type => "." + type).join(",")} />
          <Icon name="clip" />
        </label>
      </div>
    </div>
  )
}

export default TextareaAttachments
