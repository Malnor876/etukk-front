import "./Author.scss"

import { UserSigned } from "infrastructure/persistence/redux/reducers/user/types"

interface AuthorProps extends Pick<UserSigned, "avatar" | "firstName" | "city"> { }

function Author(props: AuthorProps) {
  return (
    <div className="author">
      <img src={props.avatar} alt="avatar" className="author__avatar" />
      <div className="author__info">
        <div className="author__name">{props.firstName}</div>
        <div className="author__city">{props.city}</div>
      </div>
    </div>
  )
}

export default Author
