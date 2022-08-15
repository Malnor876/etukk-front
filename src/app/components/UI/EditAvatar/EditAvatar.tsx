import "./EditAvatar.scss"

import {FILE_TYPES} from "consts"
import {ChangeEvent, useState} from "react"
import {classWithModifiers} from "utils/common"

import Icon from "../Icon/Icon"

interface EditAvatarProps {
  image: string
  onChange(file: File): void | Promise<unknown>
}

function EditAvatar(props: EditAvatarProps) {
  const [image, setImage] = useState(props.image)
  const [pending, setPending] = useState(false)
  async function onChange(event: ChangeEvent<HTMLInputElement>) {
    const target = event.currentTarget
    // checks
    const files = target.files
    if (files === null) return
    const file = files[0] as File | undefined
    if (file == null) return
    // awaits
    setPending(true)
    await props.onChange(file)
    setPending(false)
    // updates
    setImage(URL.createObjectURL(file))
  }
  return (
    <div className={classWithModifiers("edit-avatar", pending && "pending")}>
      <img src={image} alt="avatar" className="edit-avatar__image" />
      <label className="edit-avatar__cover">
        <Icon className="edit-avatar__icon" name="camera" />
        <input
          className="edit-avatar__input"
          type="file"
          accept={FILE_TYPES.IMAGE.map(i => "." + i).join(",")}
          onChange={onChange}
          aria-hidden={false}
        />
      </label>
    </div>
  )
}

export default EditAvatar
