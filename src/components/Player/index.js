/**
The component to embed the iframe video which plays the white noise
**/
import React from "react"
import "./style.scss"
import { Select } from "antd"
const { Option } = Select

class Player extends React.Component {
  state = {
    // default song
    song: "Thunder"
  }
  songsUrl = {
    Forest: "https://www.youtube.com/embed/8plwv25NYRo",
    City: "https://www.youtube.com/embed/Fm0sToWtatw",
    Thunder: "https://www.youtube.com/embed/mPZkdNFkNps"
  }
  _sizes = {
    mid: {
      width: 560,
      height: 315
    },
    large: {
      width: 760,
      height: 515
    },
    small: {
      width: 358,
      height: 215
    }
  }
  handleChange = value => {
    console.log(value)
    this.setState({
      song: value
    })
  }
  render() {
    return (
      <div className={`${this.props.position} player`}>
        <div>
          <span className="player-title">Wanna different rains?</span>
          <Select
            defaultValue="Thunder"
            style={{ width: 120 }}
            onChange={this.handleChange}
          >
            <Option value="Forest">Forest</Option>
            <Option value="City">City</Option>
            <Option value="Thunder">Thunder</Option>
          </Select>
        </div>
        <iframe
          width={this._sizes[this.props.size].width}
          height={this._sizes[this.props.size].height}
          src={this.songsUrl[this.state.song]}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="white noise"
        ></iframe>
      </div>
    )
  }
}

export default Player
