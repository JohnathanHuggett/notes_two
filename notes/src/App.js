import React, { Component } from "react";

import Auth from "./components/Authenication/Auth";

import "./App.css";

class App extends Component {
  // componentDidMount() {
  //   this.props.getNotes();
  // }

  render() {
    return <div className="App">Hello</div>;
  }
}
// const mapStateToProps = ({}) => {};

export default Auth(App);
