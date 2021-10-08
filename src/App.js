import React, { Component } from "react";
import logo from "./logo.svg";
import { Match_card_component } from "./components/match-card-component/match-card-component";
import { Match_Card_List_Component } from "./components/match-card-list-component/match-card-list-component";
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

    // console.log("In the Component Did Mmount function");
  } // End Component Did Mount

  render() {
    const { matches } = this.state;
    return (
      <div>
        {/* {this.print_matches()} */}

        <Match_Card_List_Component match={matches}></Match_Card_List_Component>

        {/* {this.print_matches()} */}
      </div>
    );
  }
} // End Class

export default App;

// Fetch this
// https://api.pandascore.co/lol/matches/upcoming?token=NCwDu3hO22ttsSy8guFfR4Zfxv0vmBOmxXRNCZlKxg8kvi-tI6o
