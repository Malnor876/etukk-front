import "./Textarea.scss"

import { FILE_TYPES } from "consts"
import _ from "lodash"
import { ChangeEvent, DetailedHTMLProps, TextareaHTMLAttributes, useState } from "react"
import { classMerge } from "utils/common"

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
  function addFiles(file: File[]) {
    if (file.length === 0) {
      setFiles([])
      return []
    }

    const nextFiles = [...files, ...file]
    setFiles(nextFiles)

    return nextFiles
  }
  function removeFile(file: File) {
    setFiles(files => files.filter(temp => temp !== file))
  }
  function onFileInputChange(event: ChangeEvent<HTMLInputElement>) {
    // https://stackoverflow.com/questions/5632629/how-to-change-a-file-inputs-filelist-programmatically

    const target = event.currentTarget

    const files = addFiles([...target.files ?? []])
    const dataTransfer = new DataTransfer()

    if (files.length > (props.maxFiles ?? Infinity)) return

    files.forEach(file => dataTransfer.items.add(file))
    target.files = dataTransfer.files
  }
  return (
    <div className="textarea">
      {props.children && (
        <div className="textarea__label">{props.children}</div>
      )}
      <div className="textarea-attachments" aria-label="textarea with attachments">
        <textarea {..._.omit(props, "children", "width")} style={{ "--textarea-width": props.width }} className={classMerge("textarea__appearance", props.className)} />
        <label className="textarea-attachments__attach" aria-label="attach files" role="button" tabIndex={0}>
          <input className="textarea-attachments__input" type="file" name={`${props.name}-attachments`} multiple accept={FILE_TYPES.IMAGE.map(type => "." + type).join(",")} onChange={onFileInputChange} />
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
