/**
 * SCSS Preload to stop unexpected overwriting styles
*/
// import "app/layouts/Modal/FullscreenLayout/FullscreenLayout.scss"

/**
 * Effects Dependencies
 */
import useLocalStorage from "hooks/useLocalStorage"
import useResizeObserverSize from "hooks/useResizeObserverEntry"
import { userFetch } from "infrastructure/persistence/redux/reducers/user"
import Localization from "modules/localization/controller"
import { Modal } from "modules/modal/controller"
import { useEffect } from "react"
// import ReactGA from "react-ga4"
import { useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"

import FullscreenPasswordRecovery from "./components/modals/auth/FullscreenPasswordRecovery"

function AppEffects() {
  const dispatch = useDispatch()
  useRoutedModalView()
  // const { inlineSize: bodySize } = useResizeObserverSize(document.body)
  // useEffect(() => {
  //   document.head.gete
  // }, [bodySize])

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token == null) return

    dispatch(userFetch({ access_token: token }))
  }, [])

  return null
}

function useRoutedModalView() {
  const [searchParams] = useSearchParams()

  const modal = searchParams.get("modal")
  const recoveryToken = searchParams.get("recovery_token")

  useEffect(() => {
    switch (modal) {
      case "password_recovery":
        if (recoveryToken == null) break
        Modal.open(FullscreenPasswordRecovery, { recoveryToken })
        break

      default:
        break
    }
  }, [modal])
}

export default AppEffects


// if (process.env.REACT_APP_API_GA) {
//   ReactGA.initialize(process.env.REACT_APP_API_GA)
// } else {
//   const message = ".env variable `REACT_APP_API_GA` is empty, GA will not be initialized."
//   alert(message)
//   console.warn(message)
// }