import useLocalStorage from "hooks/useLocalStorage"
import useResizeObserverSize from "hooks/useResizeObserverEntry"
import Localization from "modules/localization/controller"
import { useEffect } from "react"
// import ReactGA from "react-ga4"
import { useDispatch } from "react-redux"

function AppEffects() {
  // const { inlineSize: bodySize } = useResizeObserverSize(document.body)
  // useEffect(() => {
  //   document.head.gete
  // }, [bodySize])

  return null
}

export default AppEffects


// if (process.env.REACT_APP_API_GA) {
//   ReactGA.initialize(process.env.REACT_APP_API_GA)
// } else {
//   const message = ".env variable `REACT_APP_API_GA` is empty, GA will not be initialized."
//   alert(message)
//   console.warn(message)
// }