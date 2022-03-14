import "./SortingToggle.scss"

import Icon from "../Icon/Icon"

interface SortingToggleProps { }

function SortingToggle(props: SortingToggleProps) {
  return (
    <div className="sorting-toggle">
      <div className="sorting-toggle__text">Сначала новые</div>
      <Icon name="sort" />
    </div>
  )
}

export default SortingToggle
