import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "gatsby"

export default props => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Gatsby-Bootstrapプロジェクト</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            <b className="text-dark">ホーム</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            <b className="text-dark">私たちについて</b>
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            <b className="text-dark">連絡先</b>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)
