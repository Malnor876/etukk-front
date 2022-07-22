import "./Textarea.scss"

import { FILE_TYPES } from "consts"
import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useEffect, useRef, useState } from "react"
import { classMerge } from "utils/common"
import { amendInputFiles } from "utils/file"

import CloseButton from "../CloseButton/CloseButton"
import Icon from "../Icon/Icon"

interface TextareaAttachmentsProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  width?: string
  maxFiles?: number
}

/**
 * When `name` is passed, attachment files input will have its own name with suffix "attachments" -> `[name]-attachments`. 
 */
function TextareaAttachments(props: TextareaAttachmentsProps) {
  const [files, setFiles] = useState<File[]>([])
  const attachmentsRef = useRef<HTMLInputElement>(null)
  function removeFile(file: File): void {
    setFiles(files => files.filter(temp => temp !== file))
  }
  function onFileInputChange(event: ChangeEvent<HTMLInputElement>): void {
    const target = event.currentTarget

    const nextFiles = [...files, ...target.files ?? []]
    if (nextFiles.length > (props.maxFiles ?? Infinity)) return

    setFiles(nextFiles)
  }
  useEffect(() => {
    if (attachmentsRef.current === null) return

    amendInputFiles(attachmentsRef.current, files)
  }, [files])
  return (
    <div className="textarea">
      {props.children && (
        <div className="textarea__label">{props.children}</div>
      )}
      <div className="textarea-attachments" aria-label="textarea with attachments">
        <textarea {..._.omit(props, "children", "width", "maxFiles")} style={{ "--textarea-width": props.width }} className={classMerge("textarea__appearance", props.className)} />
        <label className="textarea-attachments__attach" aria-label="attach files" role="button" tabIndex={0}>
          <input className="textarea-attachments__input" type="file" name={`${props.name}-attachments`} multiple accept={FILE_TYPES.IMAGE.map(type => "." + type).join(",")} onChange={onFileInputChange} ref={attachmentsRef} />
          <Icon name="clip" />
        </label>
      </div>
      <div className="textarea-attachments__attachments">
        {files.map(file => file.type.search(/image|video/) > -1 && (
          <div className="textarea-attachment">
            <img src={URL.createObjectURL(file)} alt="attachment" className="textarea-attachment__image" />
            <div className="textarea-attachment__close">
              <CloseButton onClick={() => removeFile(file)} />
            </div>
          </div>
        ))}
      </div>
      {/* <ChooseImage /> */}
    </div>
  )
}

export default TextareaAttachments
