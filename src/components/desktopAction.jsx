import React, { Component } from "react";
import "./desktopAction.css";
import Translate from "translate-components";

class DesktopAction extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul className="nav navbar-nav desktop-action">
          <li className="text-center">
            <a href="#one" data-toggle="collapse" data-target="#one">
              <span className="black">
                <i className="fa fa-user" aria-hidden="true" />
                <br />
                <Translate useRawText={true}>Profile</Translate>
              </span>
            </a>
          </li>
          <li className="text-center">
            <a href="#two" data-toggle="collapse" data-target="#two">
              <span className="black">
                <i className="fa fa-heart" aria-hidden="true" />
                <br />
                <Translate useRawText={true}>Wishlist</Translate>
              </span>
            </a>
          </li>
          <li className="text-center">
            <a href="#three" data-toggle="collapse" data-target="#three">
              <span className="black">
                <i className="fa fa-shopping-bag" aria-hidden="true" />
                <br />
                <Translate useRawText={true}>Bag</Translate>
              </span>
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default DesktopAction;
