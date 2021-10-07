import React, { Component } from "react";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
    }; // End this.state
  } // end Ctor

  componentDidMount() {
    console.log("IN THE Component did  Mount function");
    fetch(
      "https://api.pandascore.co/lol/matches/upcoming?token=NCwDu3hO22ttsSy8guFfR4Zfxv0vmBOmxXRNCZlKxg8kvi-tI6o"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ matches: data }));

    console.log(this.state.matches[0] ? this.state.matches[0] : "");
  } // End Component Did Mount

  render() {
    return (
      <div>
        {/* {this.state.matches[0].map((match) => <>{match.winner_id}</>)
          ? this.state.matches
          : ""} */}
        Hello World
      </div>
    );
  }
} // End Class

export default App;

// Fetch this
// https://api.pandascore.co/lol/matches/upcoming?token=NCwDu3hO22ttsSy8guFfR4Zfxv0vmBOmxXRNCZlKxg8kvi-tI6o
