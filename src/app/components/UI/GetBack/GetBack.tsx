import "./GetBack.scss"

import { Link, LinkProps } from "react-router-dom"

import Icon from "../Icon/Icon"

interface GetBackProps extends LinkProps { }

function GetBack(props: GetBackProps) {
  return (
    <Link {...props} className="get-back">
      <Icon className="get-back__icon" name="chevron" />
      <div className="get-back__text">Назад</div>
    </Link>
  )
}

export default GetBack
