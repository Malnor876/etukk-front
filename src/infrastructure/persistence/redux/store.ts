// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./store.d.ts" />


import { createReduxEnhancer } from "@sentry/react"
import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"

import combinedReducers from "./combinedReducers"


const enhancer = compose(applyMiddleware(thunk))
const sentryEnhancer = createReduxEnhancer({
  stateTransformer: enhancer
})
const store = createStore(combinedReducers, sentryEnhancer)

export default store
