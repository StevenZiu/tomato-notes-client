import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from "../Home"
import Auth from "../Auth"
import { Route, Switch } from "react-router-dom"
class BasicLayout extends React.Component {
  render() {
    return (
      <div className="basic-layout">
        <Header></Header>
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Auth}></Route>
            <Route exact path="/register" component={Auth}></Route>
          </Switch>
        </div>
      </div>
    )
  }
}

export default BasicLayout
