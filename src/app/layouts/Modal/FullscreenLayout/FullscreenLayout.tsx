import "./FullscreenLayout.scss"

import Icon from "app/components/UI/Icon/Icon"
import useResizeObserverSize, { DeviceWidths } from "hooks/useResizeObserverEntry"
import { useModal } from "modules/modal/hook"
import { ReactNode } from "react"
import { classMerge } from "utils/common"

interface FullscreenLayoutProps {
  width?: string
  className?: string
  children: ReactNode
}

function FullscreenLayout(props: FullscreenLayoutProps) {
  const { close } = useModal()
  const { inlineSize: bodySize } = useResizeObserverSize(document.body)

  if (bodySize <= DeviceWidths.Mobile) {
    return (
      <div className={classMerge("fullscreen-layout", props.className)}>
        <div className="fullscreen-layout__container">
          <button className="fullscreen-layout__close" type="button" onClick={close}>
            <Icon name="cross" />
          </button>
          <div className="fullscreen-layout__inner">
            <img className="fullscreen-layout__logo" src="/static/images/logo-white.svg" alt="etukk logo white" />
            {props.children}
          </div>
        </div>
      </div>
    )
  }
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
