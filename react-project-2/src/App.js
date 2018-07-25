import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <h1>React Router</h1>
            <Link to="/">Home</Link> <Link to="/about">About</Link>
            <hr />
            <Route exact path="/" component={() => <Home />} />
            <Route path="/about" component={() => <About />} />
          </div>
        </BrowserRouter>
        {/* <Home />
        <About /> */}
      </div>
    );
  }
}

export default App;
