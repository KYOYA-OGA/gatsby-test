import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Gatsby-Bootstrapプロジェクト</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          ホーム
        </Nav.Link>
        <Nav.Link as={Link} to="/about">
          私たちについて
        </Nav.Link>
        <Nav.Link as={Link} to="/contact">
          連絡先
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
