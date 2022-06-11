import "./ChooseImage.scss"

import { FILE_TYPES } from "consts"
import { ChangeEvent, Dispatch, DragEvent, useEffect, useState } from "react"
import { getFileId } from "utils/file"

import CloseButton from "../CloseButton/CloseButton"
import Icon from "../Icon/Icon"

type ChooseImageFiles = File[]
interface ChooseImageProps {
  name?: string
  defaultValue?: ChooseImageFiles

  onChange?: Dispatch<ChooseImageFiles>
}

function ChooseImage(props: ChooseImageProps) {
  const [files, setFiles] = useState<ChooseImageFiles>(props.defaultValue || [])
  async function addFiles(filesToAdd: ChooseImageFiles) {
    const nextFiles: ChooseImageFiles = []
    // Filter by file
    for (const fileToAdd of filesToAdd) {
      if (files.some(file => getFileId(file) === getFileId(fileToAdd))) continue
      nextFiles.push(fileToAdd)
    }
    if (nextFiles.length === 0) return

    setFiles([...files, ...nextFiles])
  }
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget

    if (target.files === null) return
    if (target.files.length === 0) return

    const nextFiles = [...target.files]
    if (nextFiles.some(file => !file.type.startsWith("image"))) return
    // reset FileList
    target.value = ""
    // dispatch
    addFiles(nextFiles)
  }
  function onDrop(event: DragEvent<HTMLDivElement>) {

    const droppedFiles = [...event.dataTransfer.files]

    if (droppedFiles.length === 0) return
    if (droppedFiles.some(file => !file.type.startsWith("image"))) return

    event.preventDefault()

    addFiles(droppedFiles)
    props.onChange?.(droppedFiles)
  }
  function onRemove(file: File) {
    const fileIndex = files.indexOf(file)
    setFiles((files.splice(fileIndex, 1), [...files]))
  }
  useEffect(() => {
    props.onChange?.(files)
  }, [files])

  return (
    <div className="choose-image" onDragOver={event => event.preventDefault()} onDrop={onDrop}>
      <label className="choose-image__chooser">
        <Icon className="choose-image__camera" name="camera" />
        <input className="choose-image__input" name={props.name} type="file" multiple accept={FILE_TYPES.IMAGE.map(i => "." + i).join(",")} onChange={onChange} aria-hidden="false" />
      </label>
      {files.map(file => (
        <div className="choose-image__file" key={getFileId(file)}>
          <img src={URL.createObjectURL(file)} alt="product" className="choose-image__image" />
          <div className="choose-image__remove">
            <CloseButton size="small" onClick={() => onRemove(file)} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChooseImage
