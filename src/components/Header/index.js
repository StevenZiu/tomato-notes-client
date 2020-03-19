import React from "react"
import "./style.scss"
import { Link } from "react-router-dom"
import { Col, Row } from "antd"
const Header = props => {
  return (
    <Row className="header-content" justify="space-between" align="middle">
      <Col span={4}>
        <Link to="/">Home Logo</Link>
      </Col>
      <Col span={10} className="link-group">
        <Link to="/login">Login</Link>
        <Link to="/about">About</Link>
      </Col>
    </Row>
  )
}

export default Header
