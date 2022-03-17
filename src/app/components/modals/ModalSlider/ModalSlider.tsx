import "./ModalSlider.scss"

import Icon from "app/components/UI/Icon/Icon"
import { useModal } from "modules/modal/hook"
import { useState } from "react"

interface ModalSliderProps {
  slides: string[]
}

function ModalSlider(props: ModalSliderProps) {
  const { close } = useModal()
  const [index, setIndex] = useState(0)
  function updateIndex(value: number) {
    if (value < 0) {
      return setIndex(props.slides.length - 1)
    }
    if (value > props.slides.length - 1) {
      return setIndex(0)
    }
    setIndex(value)
  }
  const next = () => updateIndex(index + 1)
  const prev = () => updateIndex(index - 1)
  return (
    <div className="modal-slider">
      <button className="modal-slider__close" type="button" onClick={close}>
        <Icon name="cross" />
      </button>
      <div className="modal-slider__container">
        <div className="modal-slider__current" aria-hidden>
          <img className="modal-slider__slide" src={props.slides[index]} alt="slide" />
          <div className="modal-slider__arrows">
            <button className="modal-slider__arrow" type="button" onClick={prev}>
              <Icon name="chevron" />
            </button>
            <button className="modal-slider__arrow" type="button" onClick={next}>
              <Icon name="chevron" />
            </button>
          </div>
        </div>
        <div className="modal-slider__slides">
          {props.slides.map((slide, index) => (
            <img className="modal-slider__slide" src={slide} alt="slide" onClick={() => setIndex(index)} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModalSlider
