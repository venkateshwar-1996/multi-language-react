import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./desktopNavbar.css";
import Translate from "translate-components";
// import translate from "translate";
// import dict from "dict-en-zh";
class DesktopNavbar extends Component {
  render() {
    return (
      <Nav className="mr-auto desktop-navbar">
        <Nav.Link
          href="#home"
          className="category"
          onMouseEnter={this.props.handleMouseHover}
          // onMouseLeave={this.props.handleMouseHover}
        >
          <Translate useRawText={true}>Category</Translate>
        </Nav.Link>

        {/* <div class="desktop-categoryContainer">
          <li class="desktop-oddColumnContent">
            <a>venkatesh</a>
          </li> 
        </div>*/}
        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" />
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
        <Nav.Link href="#features">
          <Translate useRawText={true}>Location</Translate>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <Translate useRawText={true}>Community</Translate>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <Translate useRawText={true}>Cusine</Translate>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <Translate useRawText={true}>Shop</Translate>
        </Nav.Link>
      </Nav>
    );
  }
}

export default DesktopNavbar;
