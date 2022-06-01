import Icon from "app/components/UI/Icon/Icon"
import { postUserFavoriteLots, postUserFavoriteUser } from "infrastructure/persistence/api/data/actions"
import { useState } from "react"
import { useClient } from "react-fetching-library"
import { classWithModifiers } from "utils/common"

interface BookmarkProps {
  id: `${number}` | number
  type: "lot" | "user"
  className: string
  defaultValue?: boolean
}

function Bookmark(props: BookmarkProps) {
  const client = useClient()
  const [bookmarked, setBookmarked] = useState(props.defaultValue)
  async function onClick() {
    setBookmarked(!bookmarked)

    const action = props.type === "lot" ? postUserFavoriteLots({ lot_id: Number(props.id) }) : postUserFavoriteUser({ fav_user_id: Number(props.id) })

    const { error } = await client.query(action)
    if (error) setBookmarked(bookmarked)
  }

  if (bookmarked == null) return null
  return (
    <button className={classWithModifiers(props.className, bookmarked && "active")} onClick={onClick}>
      <Icon name="bookmark-3d" />
    </button>
  )
}

export default Bookmark
