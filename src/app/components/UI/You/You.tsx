import "./You.scss"

import meliodas from "./meliodas.jpg"

function You() {
  return (
    <div className="you">
      <img src={meliodas} alt="" className="you__avatar" />
      <div className="you__text">Вы</div>
    </div>
  )
}

export default You
