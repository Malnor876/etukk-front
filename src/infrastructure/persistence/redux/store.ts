// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./store.d.ts" />


import { applyMiddleware, compose, createStore } from "redux"
import thunk from "redux-thunk"

import combinedReducers from "./combinedReducers"

const enhancer = compose(applyMiddleware(thunk))
const store = createStore(combinedReducers, enhancer)

export default store