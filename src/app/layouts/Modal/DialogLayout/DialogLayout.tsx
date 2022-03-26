import "./DialogLayout.scss"

import Icon from "app/components/UI/Icon/Icon"
import { useModal } from "modules/modal/hook"
import { ReactNode } from "react"
import { classWithModifiers } from "utils/common"

interface DialogLayoutProps {
  width?: string
  centered?: boolean
  pushLeft?: boolean
  pushRight?: boolean
  children: ReactNode
}

function DialogLayout(props: DialogLayoutProps) {
  const { close, params } = useModal()
  const modifiers: string[] = []
  if (props.centered) modifiers.push("centered")
  if (props.pushLeft) modifiers.push("push-left")
  if (props.pushRight) modifiers.push("push-right")
  return (
    <div className="dialog-layout" style={{ "--dialog-width": props.width }}>
      <div className="dialog-layout__container">
        {/* {!params?.closable && (
          <button className="popup-layout__close" type="button" onClick={close}>
            <Icon name="cross" />
          </button>
        )} */}
        <div className={classWithModifiers("dialog-layout__inner", ...modifiers)}>{props.children}</div>
      </div>
    </div>
  )
}

export default DialogLayout
