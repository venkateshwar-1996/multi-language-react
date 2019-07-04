import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class DesktopSearch extends Component {
  state = {};
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </div>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </div>
    );
  }
}

export default DesktopSearch;
