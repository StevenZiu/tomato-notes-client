import React from "react"
import Timer from "../../components/Timer"
import { Col, Row, Divider } from "antd"
import TomatoForm from "../../components/TomatoForm"
import "./style.scss"
import { TagsOutlined } from "@ant-design/icons"
class Home extends React.Component {
  state = {
    start: "",
    end: ""
  }
  timerStart = startTimeStamp => {
    console.log(startTimeStamp)
    this.setState({ ...this.state, start: startTimeStamp })
  }
  timerEnd = endTimeStamp => {
    console.log(endTimeStamp)
    this.setState({ ...this.state, end: endTimeStamp })
  }
  timerReset = () => {
    this.setState({ ...this.state, start: "", end: "" })
  }
  render() {
    return (
      <div className="home-container">
        <Row type="flex" className="title" justify="center" align="middle">
          <Col className="title" col={24}>
            <span className="main-title">Welcome to Tomato Notes!</span> <br />
            <span className="sub-title">
              25 minutes equals 1 tomato, and with one tomato you can do a lot
              of things.
              <br />
              Click{" "}
              <a
                href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
                target="_blank"
              >
                here
              </a>{" "}
              to know what's Tomato (Pomodoro Technique).
            </span>
          </Col>
        </Row>
        <Divider />
        <Row type="flex">
          <Col sm={12} col={24}>
            <Timer
              start={this.timerStart}
              end={this.timerEnd}
              reset={this.timerReset}
            ></Timer>
          </Col>
          <Col sm={12} col={24}>
            <p className="form-title">Create new Tomato</p>
            <TomatoForm
              startAt={this.state.start}
              endAt={this.state.end}
              isUpdate={false}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
