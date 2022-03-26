import "./Slider.scss"

import Icon from "app/components/UI/Icon/Icon"
import { useState } from "react"

interface SliderProps {
  slides: string[]
}

function Slider(props: SliderProps) {
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
    <div className="slider">
      <div className="slider__container">
        <div className="slider__current" aria-hidden>
          <img className="slider__slide" src={props.slides[index]} alt="slide" />
          {props.slides.length > 1 && (
            <div className="slider__arrows">
              <button className="slider__arrow" type="button" onClick={prev}>
                <Icon name="chevron" />
              </button>
              <button className="slider__arrow" type="button" onClick={next}>
                <Icon name="chevron" />
              </button>
            </div>
          )}
        </div>
        {props.slides.length > 1 && (
          <div className="slider__slides">
            {props.slides.map((slide, index) => (
              <img className="slider__slide" src={slide} alt="slide" onClick={() => setIndex(index)} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Slider
