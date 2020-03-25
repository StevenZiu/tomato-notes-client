import React from "react"
import "./App.css"
// load antd style
import "antd/dist/antd.css"
import "@fortawesome/fontawesome-free/scss/fontawesome.scss"
import "@fortawesome/fontawesome-free/js/all.js"
import { BrowserRouter as Router } from "react-router-dom"
import BasicLayout from "./container/BasicLayout"
import { configStore } from "./state/store"
import { Provider } from "react-redux"

function App() {
  const store = configStore()
  return (
    <Provider store={store}>
      <Router>
        <BasicLayout className="App"></BasicLayout>
      </Router>
    </Provider>
  )
}

export default App
