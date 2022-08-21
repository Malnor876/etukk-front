import "./ChooseImage.scss"

import {LotPhotoType} from "areas/lot/types"
import {FILE_TYPES} from "consts"
import {deleteLotByLotIdPhotoByPhotoId} from "infrastructure/persistence/api/data/actions"
import {ChangeEvent, Dispatch, DragEvent, useEffect, useState} from "react"
import {useClient} from "react-fetching-library"
import {getFileId} from "utils/file"

import CloseButton from "../CloseButton/CloseButton"
import Icon from "../Icon/Icon"

type ChooseImageFiles = File[]
export type ImageFiles = (File | LotPhotoType)[]
interface ChooseImageProps {
  name?: string
  // defaultValue?: ChooseImageFiles
  defaultValue?: ImageFiles
  accept?: string

  onChange?: Dispatch<ChooseImageFiles>
}

function ChooseImage(props: ChooseImageProps) {
  const [files, setFiles] = useState<ImageFiles>(props.defaultValue || [])
  const [newFiles, setNewFiles] = useState<ChooseImageFiles>([])
  const [dragIndexFile, setDragIndexFile] = useState<number>(0)
  const client = useClient()

  async function addFiles(filesToAdd: ChooseImageFiles) {
    const nextFiles: ChooseImageFiles = []
    // Filter by file
    for (const fileToAdd of filesToAdd) {
      if (
        files.some(
          file =>
            file instanceof File && getFileId(file) === getFileId(fileToAdd)
        )
      )
        continue
      nextFiles.push(fileToAdd)
    }
    if (nextFiles.length === 0) return
    setNewFiles([...newFiles, ...nextFiles])
    setFiles([...files, ...nextFiles] as ImageFiles)
  }
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget
    if (target.files === null) return
    if (target.files.length === 0) return
    const nextFiles = [...target.files]

    if (nextFiles.some(file => !file.type.startsWith("image"))) return
    if (nextFiles.some(file => file.name.split(".").pop() === "gif")) return
    // reset FileList
    target.value = ""
    // dispatch
    addFiles(nextFiles)
  }
  async function onRemove(file: File | LotPhotoType) {
    if (!(file instanceof File)) {
      const {error} = await client.query(
        deleteLotByLotIdPhotoByPhotoId(+file.id, +file.lot_id)
      )
      if (error) return
    }
    const fileIndex = files.indexOf(file)
    setFiles((files.splice(fileIndex, 1), [...files]))
  }
  console.log("files", files)

  useEffect(() => {
    props.onChange?.(newFiles)
  }, [files])

  const dragStartHandler = (
    event: DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setDragIndexFile(index)
  }

  const dropHandler = (
    event: DragEvent<HTMLDivElement>,
    file: File | LotPhotoType,
    dropIndex: number
  ) => {
    event.preventDefault()
    const newFiles = [...files]
    newFiles[dropIndex] = files[dragIndexFile]
    newFiles[dragIndexFile] = file
    setFiles(newFiles)
  }
  return (
    <div className="choose-image">
      <label className="choose-image__chooser">
        <Icon className="choose-image__camera" name="camera" />
        <input
          className="choose-image__input"
          name={props.name}
          type="file"
          multiple
          accept={FILE_TYPES.IMAGE.map(i => "." + i).join(",")}
          onChange={onChange}
          aria-hidden="false"
        />
      </label>
      {files.map((file, index) => (
        <div
          className="choose-image__file"
          key={index}
          draggable={true}
          onDragStart={event => dragStartHandler(event, index)}
          onDragOver={event => event.preventDefault()}
          onDrop={event => dropHandler(event, file, index)}>
          <img
            src={
              file instanceof File ? URL.createObjectURL(file) : file.filename
            }
            alt="product"
            className="choose-image__image"
          />
          <div className="choose-image__remove">
            <CloseButton size="small" onClick={() => onRemove(file)} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChooseImage
