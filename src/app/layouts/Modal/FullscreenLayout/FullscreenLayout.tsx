import "./FullscreenLayout.scss"

import Icon from "app/components/UI/Icon/Icon"
import { useModal } from "modules/modal/hook"
import { ReactNode } from "react"

interface FullscreenLayoutProps {
  width?: string
  children: ReactNode
}

function FullscreenLayout(props: FullscreenLayoutProps) {
  const { close } = useModal()
  return (
    <div className="fullscreen-layout" style={{ "--fullscreen-width": props.width }}>
      <div className="fullscreen-layout__icon">
        <img src="/static/images/logo.svg" alt="etukk logo" />
      </div>
      <div className="fullscreen-layout__container">
        <button className="fullscreen-layout__close" type="button" onClick={close}>
          <Icon name="cross" />
        </button>
        <div className="fullscreen-layout__inner">
          <img className="fullscreen-layout__logo" src="/static/images/logo.svg" alt="etukk logo" />
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default FullscreenLayout
