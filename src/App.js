import React from "react"
import "./App.css"
// load antd style
import "antd/dist/antd.css"
import { BrowserRouter as Router } from "react-router-dom"
import BasicLayout from "./container/BasicLayout"

function App() {
  return (
    <Router>
      <BasicLayout className="App"></BasicLayout>
    </Router>
  )
}

export default App
