import "./MiniProfile.scss"

import Icon from "app/components/UI/Icon/Icon"
import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"
import { useState } from "react"
import { classWithModifiers } from "utils/common"

function MiniProfile(props: { user: UserSigned; }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="mini-profile">
      <img src={props.user.avatar} alt="avatar" className="mini-profile__avatar" />
      <div className="mini-profile__name">{props.user.fullName}</div>
      <button className="mini-profile__expand" type="button" onClick={() => setExpanded(!expanded)}>
        <Icon className={classWithModifiers("mini-profile__icon", expanded && "up")} name="chevron" />
      </button>
    </div>
  )
}

export default MiniProfile