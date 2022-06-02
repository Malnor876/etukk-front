import "./CountableTimer.scss"

import { ReactNode, useEffect, useState } from "react"

interface CountableTimerProps {
  futureDate: Date | string | number
  /**
   * Start of the time periods (days, hours, minutes, seconds) in order.
   * Starts with `zero`
   */
  start?: number
  endLabel?: ReactNode
  splitter?: string
}

function CountableTimer(props: CountableTimerProps) {
  const [timer, setTimer] = useState<[number, number, number, number] | null>(getTimeDifference(props.futureDate, props.start))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimeDifference(props.futureDate, props.start))
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [props.futureDate, props.start])
  return (
    <div className="count-down">{timer ? timer.join(props.splitter || ":") : (props.endLabel || "Таймер вышел")}</div>
  )
}

function getTimeDifference(futureDate: Date | string | number, start = 0): [number, number, number, number] | null {
  // https://www.w3schools.com/howto/howto_js_countdown.asp
  const now = Date.now()
  const futureTime = new Date(futureDate).getTime()

  const distance = futureTime - now

  if (distance <= 0) {
    return null
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds].slice(start) as never
}

export default CountableTimer
