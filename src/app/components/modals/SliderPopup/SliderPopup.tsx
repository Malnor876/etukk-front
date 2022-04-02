import "./SliderPopup.scss"

import Slider from "app/components/containers/Slider/Slider"
import Icon from "app/components/UI/Icon/Icon"
import { useModal } from "modules/modal/hook"
import { stopPropagation } from "utils/common"

interface SliderPopupProps {
  slides: string[]
}

function SliderPopup(props: SliderPopupProps) {
  const { close } = useModal()
  return (
    <div className="slider-popup" onClick={stopPropagation(close)}>
      <div className="slider-popup__container">
        <button className="slider-popup__close" type="button" onClick={close}>
          <Icon name="cross" />
        </button>
        <Slider slides={props.slides} />
      </div>
    </div>
  )
}

export default SliderPopup
