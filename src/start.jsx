import React, { Component } from "react";
import translations from "./shared/translations.json";
import { TranslateProvider } from "translate-components";
import NavBar from "./components/navbar";

class Start extends Component {
  state = {
    lang: localStorage.getItem("myLanguage") || "en"
  };
  changeLanguage = lang => {
    this.setState({ lang });
    localStorage.setItem("myLanguage", lang);
  };
  render() {
    return (
      <TranslateProvider
        translations={translations}
        defaultLanguage={this.state.lang}
      >
        <NavBar changeLanguage={this.changeLanguage} />
      </TranslateProvider>
    );
  }
}

export default Start;
