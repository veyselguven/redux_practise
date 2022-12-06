/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// storemuzu companentimize baglamak icin
//connect adinda bir nesne var

import { connect } from "react-redux";
import { updateUser, getUsers } from "./actions/user-action";

class App extends Component {
  constructor(props) {
    super(props);
    // this.onUpdateUser=this.onUpdateUser.bind(this)
  }

  onUpdateUser = () => {
    // dipatch actioni store gondermekti amaci
    // this.props.dispatch(updateUser("Hatun"));
    this.props.onUpdateUser("Hatunn");
  };
  // onShowErr = () => {
  //   this.props.onShowErr();
  // };

  componentDidMount() {
    setTimeout(() => {
      this.props.onGetUsers();
    }, 2000);
  }
  render() {
    // console.log("props from store=>", this.props);
    return (
      <div className="App">
        <h1>{this.props.user}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.onUpdateUser}>Change The Name</button>
          {/* <button onClick={this.onShowErr}>showError</button> */}
        </header>
      </div>
    );
  }
}
// bu mapstatetoprops state imizde ne varsa
// componentimiz icinde props olarak kullanmamizi saglar
// const mapStateToProps = (state) => ({
//   products: state.products,
// });
const mapStateToProps = (state, props) => {
  // console.log("props=>", props);
  // console.log("state=>", state);
  return state;
};
// mapdispatchtoprops bizim dispatch ettigimiz actiolarimizi mapleyin bir yapi

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers: getUsers,
  // onShowErr: showError,
};
// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log("propsFromState=>", propsFromState);
//   console.log("propsFromDispatch=>", propsFromDispatch);
//   console.log("ownProps=>", ownProps);
//   return {};
// };

// store u companentimize bagliyoruz          // 3. parametre , mergeProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
