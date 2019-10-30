import React from "react";
import { connect } from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import TitleComponent from "./TitleComponent";

function App(props) {
  const { counter, onDecrement, onIncrement } = props;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Counter:
        <br />
        <div className="App-counter">{counter}</div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <br />
        <TitleComponent />
      </header>
    </div>
  );
}

//gets props from global store / global state
const mapStateToProps = state => {
  return { counter: state.counter };
};

//dispatch reference
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch({ type: "INCREMENT" }),
    onDecrement: () => dispatch({ type: "DECREMENT" })
  };
};

//connector
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
