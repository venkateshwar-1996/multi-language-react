import React, { Component } from "react";
import { Navbar, Form } from "react-bootstrap";
import "./navbar.css";
import DesktopAction from "./desktopAction";
import DesktopNavbar from "./desktopNavbar";
import CategoryContainer from "./navbarContainers/categoryContainer";
import Language from "./language";
import DesktopSearch from "./desktopSearch";
class NavBar extends Component {
  // state = {  }
  state = {
    isCategoryHovering: false
  };

  handleMouseHover = () => {
    console.log("hello venkatesh", this.state.isCategoryHovering);
    this.setState(this.toggleHoverState);
  };
  toggleHoverState = state => {
    return {
      isCategoryHovering: !state.isCategoryHovering
    };
  };
  render() {
    return (
      <React.Fragment>
        <Navbar bg="light" variant="light">
          {/* <Navbar.Brand href="#home">Just My Rooys</Navbar.Brand>*/}
          <Navbar.Brand href="#home">
            <img
              src="https://justmyroots.com/template/front/img/logo.png"
              alt="JustMyRoots"
            />
          </Navbar.Brand>
          <DesktopNavbar handleMouseHover={this.handleMouseHover} />
          <Form inline>
            <DesktopSearch />
            <Language changeLanguage={this.props.changeLanguage} />
          </Form>
          <DesktopAction />
        </Navbar>
        {this.state.isCategoryHovering && (
          <CategoryContainer handleMouseHover={this.handleMouseHover} />
        )}
      </React.Fragment>
    );
  }
}

export default NavBar;
