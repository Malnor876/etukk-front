import { Component } from "react"
import { Route, Routes } from "react-router"

import LotNewEditView from "./edit"
import LotNewPreviewView from "./preview"

class LotNewView extends Component {
  // componentDidCatch() {
  //   if (sessionStorage["lot-new"]) {
  //     sessionStorage.clear()
  //     this.forceUpdate()
  //   }
  // }
  render() {
    return (
      <Routes>
        <Route path="edit/*" element={<LotNewEditView />} />
        <Route path="preview" element={<LotNewPreviewView />} />
      </Routes>
    )
  }
}

export default LotNewView 