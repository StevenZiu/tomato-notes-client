import React from "react"
import "./style.scss"
import { Button } from "antd"
class Timer extends React.Component {
  state = {
    timerStatus: "stop"
  }
  // props controlled
  TIME_LIMIT = this.props.timeLimit || 1500
  // property for timer
  FULL_DASH_ARRAY = 283
  WARNING_THRESHOLD = 10
  ALERT_THRESHOLD = 5

  COLOR_CODES = {
    info: {
      color: "green"
    },
    warning: {
      color: "orange",
      threshold: this.WARNING_THRESHOLD
    },
    alert: {
      color: "red",
      threshold: this.ALERT_THRESHOLD
    }
  }
  // startTimer();
  timePassed = 0
  timeLeft = this.TIME_LIMIT
  timerInterval = null
  remainingPathColor = this.COLOR_CODES.info.color

  onTimesUp = () => {
    clearInterval(this.timerInterval)
    this.setState({ timerStatus: "stop" })
  }

  onReset = () => {
    clearInterval(this.timerInterval)
    this.timePassed = 0
    this.timeLeft = this.TIME_LIMIT
    this.timerInterval = null
    // this.remainingPathColor = this.COLOR_CODES.info.color
    this.setRemainingPathColor(this.timeLeft)
    this.setCircleDasharray()
    document.getElementById("base-timer-label").innerHTML = this.formatTime(
      this.timeLeft
    )
    this.setState({ timerStatus: "stop" })
  }
  onPause = () => {
    if (this.timerInterval !== null) {
      this.setState({ timerStatus: "pause" })
      clearInterval(this.timerInterval)
    }
  }

  startTimer = () => {
    if (this.state.timerStatus === "stop") {
      this.setState({ timerStatus: "start" })
      this.onReset()
      this.timerInterval = setInterval(() => {
        this.timePassed = this.timePassed += 1
        this.timeLeft = this.TIME_LIMIT - this.timePassed
        document.getElementById("base-timer-label").innerHTML = this.formatTime(
          this.timeLeft
        )
        this.setCircleDasharray()
        this.setRemainingPathColor(this.timeLeft)

        if (this.timeLeft === 0) {
          this.onTimesUp(this.timerInterval)
        }
      }, 1000)
    } else if (this.state.timerStatus === "pause") {
      this.setState({ timerStatus: "start" })
      clearInterval(this.timerInterval)
      this.timerInterval = setInterval(() => {
        this.timePassed = this.timePassed += 1
        this.timeLeft = this.TIME_LIMIT - this.timePassed
        document.getElementById("base-timer-label").innerHTML = this.formatTime(
          this.timeLeft
        )
        this.setCircleDasharray()
        this.setRemainingPathColor(this.timeLeft)

        if (this.timeLeft === 0) {
          this.onTimesUp(this.timerInterval)
        }
      }, 1000)
    }
  }

  formatTime = time => {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    return `${minutes}:${seconds}`
  }

  setRemainingPathColor = () => {
    const { alert, warning, info } = this.COLOR_CODES
    if (this.timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color)
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color)
    } else if (this.timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color)
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color)
    } else {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(alert.color)
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color)
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(info.color)
    }
  }

  alculateTimeFraction = () => {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction)
  }

  calculateTimeFraction = () => {
    const rawTimeFraction = this.timeLeft / this.TIME_LIMIT
    return rawTimeFraction - (1 / this.TIME_LIMIT) * (1 - rawTimeFraction)
  }
  setCircleDasharray = () => {
    const circleDasharray = `${(
      this.calculateTimeFraction() * this.FULL_DASH_ARRAY
    ).toFixed(0)} 283`
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray)
  }
  render() {
    return (
      <div className="timer">
        <div className="base-timer">
          <svg
            className="base-timer__svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className="base-timer__circle">
              <circle
                className="base-timer__path-elapsed"
                cx="50"
                cy="50"
                r="45"
              ></circle>
              <path
                id="base-timer-path-remaining"
                strokeDasharray="283"
                className={`base-timer__path-remaining ${this.remainingPathColor}`}
                d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" className="base-timer__label">
            {this.formatTime(this.timeLeft)}
          </span>
        </div>
        <div className="button-group">
          <Button
            type="primary"
            onClick={this.startTimer}
            disabled={this.state.timerStatus === "start"}
          >
            Start
          </Button>
          <Button danger onClick={this.onPause}>
            Stop
          </Button>
          <Button type="default" onClick={this.onReset}>
            Reset
          </Button>
        </div>
      </div>
    )
  }
}

export default Timer
