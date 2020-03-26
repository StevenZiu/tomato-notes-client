import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Home from "../Home"
import Auth from "../Auth"
import Player from "../../components/Player"
import { Route, Switch } from "react-router-dom"
import "./style.scss"
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
        <Player size="small" position="br" />
      </div>
    )
  }
}

export default BasicLayout
