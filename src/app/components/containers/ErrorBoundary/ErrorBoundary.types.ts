import { ComponentClass, ErrorInfo, ReactNode, VoidFunctionComponent } from "react"

export type ErrorBoundaryError = Error
export type ErrorBoundaryReset = () => void
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ReactErrorFunction<P = any, S = any> = ComponentClass<P, S> | VoidFunctionComponent<P> | Function
export interface asd {
  reset: () => void
  state: ErrorBoundaryState
}

export interface ErrorBoundaryProps {
  children: ReactNode | ReactNode[]
  deps?: unknown[]
  fallback: ReactNode | ((reset: ErrorBoundaryReset, error?: ErrorBoundaryError, errorInfo?: ErrorInfo) => JSX.Element)
}
export interface ErrorBoundaryState {
  hasError: boolean
  error?: ErrorBoundaryError
  errorInfo?: ErrorInfo
}
