import "./Icon.scss"

import { SVGAttributes } from "react"
import { classMerge, classWithModifiers } from "utils/common"

export type IconName = (
  | "rub"
  | "attention"
  | "bell"
  | "bookmark"
  | "building"
  | "calendar"
  | "camera"
  | "chevron"
  | "clip"
  | "copy"
  | "cross"
  | "filter"
  | "google"
  | "apple"
  | "facebook"
  | "vk"
  | "yandex"
  | "odnoklassniki"
  | "like"
  | "dislike"
  | "line"
  | "menu"
  | "play"
  | "rectangle"
  | "star"
  | "star-empty"
  | "truck"
  | "check"
  | "not-allowed"
  | "pending"
) | (string & {})

interface IconProps extends SVGAttributes<SVGElement> {
  name?: IconName
  modifiers?: Array<string | number | false | null | undefined>
}

/**
 *
 * @prop `modifiers` only work when className given.
 * @prop `className` is a root class, which is modified by `name`,
 * that will be modified by `modifiers` including `name` modifications.
 *
 * Example: `"icon mentor-search__icon mentor-search__icon--chevron mentor-search__icon mentor-search__icon--chevron--up"`
 *
 */

function Icon(props: IconProps) {
  if (props.href) {
    return (
      <img src={props.href} className={classMerge("icon", props.className && classWithModifiers(props.className, ...props.modifiers || []))} />
    )
  }

  return (
    <svg {...props} className={classMerge("icon", props.className && classWithModifiers(classWithModifiers(props.className, props.name), ...props.modifiers || []))}>
      <use href={`/static/icons.svg#${props.name}`} />
    </svg>
  )
}

export default Icon
