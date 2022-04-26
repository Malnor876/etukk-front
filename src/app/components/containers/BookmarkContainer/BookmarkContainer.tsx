import Icon from "app/components/UI/Icon/Icon"
import { postCabinetFavoriteAdd } from "infrastructure/persistence/api/data/actions"
import { SchemaFavorite } from "infrastructure/persistence/api/data/schemas"
import { useState } from "react"
import { useMutation } from "react-fetching-library"
import { classWithModifiers } from "utils/common"

interface BookmarkContainerProps {
  id: `${number}` | number
  type: SchemaFavorite["type"]
  className: string
  defaultValue?: boolean
}

function BookmarkContainer(props: BookmarkContainerProps) {
  const [bookmarked, setBookmarked] = useState(props.defaultValue)
  const { mutate } = useMutation(postCabinetFavoriteAdd)
  async function onClick() {
    setBookmarked(!bookmarked)

    const { error } = await mutate({ type: props.type, item: Number(props.id) })
    if (error) setBookmarked(bookmarked)
  }

  if (bookmarked == null) return null
  return (
    <button className={classWithModifiers(props.className, bookmarked && "active")} onClick={onClick}>
      <Icon name="bookmark-3d" />
    </button>
  )
}

export default BookmarkContainer
