import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./language.css";
import { reactTranslateChangeLanguage } from "translate-components";

class Language extends Component {
  state = {};
  onClick = lang => {
    // reactTranslateChangeLanguage.bind(this, lang);
    window.location.reload();
    this.props.changeLanguage(lang);
  };
  render() {
    return (
      <React.Fragment>
        <Form.Control
          as="select"
          className="languageSelect"
          defaultValue={localStorage.getItem("myLanguage") || "en"}
        >
          <option value="en" onClick={() => this.onClick("en")}>
            English
          </option>
          <option value="ch" onClick={() => this.onClick("ch")}>
            Chinese
          </option>
        </Form.Control>
      </React.Fragment>
    );
  }
}

export default Language;
