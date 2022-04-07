import "./DrawerLayout.scss"

import { useModal } from "modules/modal/hook"
import { ReactNode } from "react"
import { stopPropagation } from "utils/common"

interface DrawerLayoutProps {
  width?: string
  children: ReactNode
}

function DrawerLayout(props: DrawerLayoutProps) {
  const { close } = useModal()
  return (
    <div className="drawer-layout" style={{ "--drawer-width": props.width }} onClick={stopPropagation(close)}>
      <div className="drawer-layout__container">
        {props.children}
      </div>
    </div>
  )
}

export default DrawerLayout
