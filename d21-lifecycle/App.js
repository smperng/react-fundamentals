import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const ThrowComp2 = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw Error("Error from ThrowComp");
  }
  return <div>Throw Component</div>;
};

class App extends Component {
  state = {
    hasError: false,
    attr: null
  };
  shouldThrow = false;
  constructor(props) {
    super(props);
    console.log(">>> constructor {", arguments);
    setTimeout(function() {
      console.log(">>> constructor }");
    }, 0);
    setTimeout(() => {
      this.setState({
        attr: "value"
      });
    }, 5000);

    setTimeout(() => {
      this.forceUpdate();
    }, 10000);

    setTimeout(() => {
      this.shouldThrow = true;
      this.setState({
        attr: "value2"
      });
    }, 15000);
  }
  tryThrow() {
    // if (this.shouldThrow) {
    //   throw Error("Error from tryThrow");
    // }
  }
  componentWillMount() {
    console.log(">>> componentWillMount {", arguments);
    setTimeout(function() {
      console.log(">>> componentWillMount }");
    }, 0);
  }
  componentDidMount() {
    console.log(">>> componentDidMount {", arguments);
    setTimeout(function() {
      console.log(">>> componentDidMount }");
    }, 0);
  }
  componentWillReceiveProps() {
    console.log(">>> componentWillReceiveProps {", arguments);
    setTimeout(function() {
      console.log(">>> componentWillReceiveProps }");
    }, 0);
  }
  shouldComponentUpdate() {
    console.log(">>> shouldComponentUpdate {", arguments);
    this.tryThrow();
    setTimeout(function() {
      console.log(">>> shouldComponentUpdate }");
    }, 0);
    return true;
  }
  componentWillUpdate() {
    console.log(">>> componentWillUpdate {", arguments);
    this.tryThrow();
    setTimeout(function() {
      console.log(">>> componentWillUpdate }");
    }, 0);
  }
  componentDidUpdate() {
    console.log(">>> componentDidUpdate {", arguments);
    this.tryThrow();
    setTimeout(function() {
      console.log(">>> componentDidUpdate }");
    }, 0);
  }
  headerRef = (...args) => {
    console.log(">>> headerRef {", args);
    console.log(
      ">>> args[0] === header?",
      args[0] === document.querySelector("header")
    );
    setTimeout(function() {
      console.log(">>> headerRef }");
    }, 0);
  };
  setState(...args) {
    console.log(">>> setState {", arguments);
    // this.tryThrow();
    setTimeout(function() {
      console.log(">>> setState }");
    }, 0);
    return super.setState.apply(this, args);
  }
  forceUpdate(...args) {
    console.log(">>> forceUpdate {", arguments);
    setTimeout(function() {
      console.log(">>> forceUpdate }");
    }, 0);
    return super.forceUpdate.apply(this, args);
  }
  componentDidCatch() {
    console.log(">>> componentDidCatch {", arguments);
    setTimeout(function() {
      console.log(">>> componentDidCatch }");
    }, 0);
    this.setState({
      hasError: true
    });
  }
  render() {
    console.log(">>> render {", arguments);
    this.tryThrow();
    setTimeout(function() {
      console.log(">>> render }");
    }, 0);
    if (this.state.hasError) {
      return <div>Caught Error</div>;
    }
    const e = (
      <div className="App">
        <header className="App-header" ref={this.headerRef}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ThrowComp2 shouldThrow={this.shouldThrow} />
        {this.props.children}
      </div>
    );
    console.log(">>> render - create element done");
    return e;
  }
}

export default App;
