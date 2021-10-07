import React, { Component } from "react";
import logo from "./logo.svg";
import { Match_card_component } from "./components/match-card-component/match-card-component";

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
      .then((response) =>   response.json())
      .then((data) => this.setState({ matches: data }));

      // console.log("In the Component Did Mmount function");

    // console.log(this.state.matches[0] ? this.state.matches[0] : "");
  } // End Component Did Mount

  print_matches = () => {

  

    if(this.state.matches[0] != ""){

      for(var i = 0; i < this.state.matches.length; i++)
      {
          console.log(this.state.matches[i].name);

      }// end For Loop

    }// end if statement

    return;
  };// end Print_matches function

  render() {
    return (
      <div>
        <Match_card_component match={this.state.matches[0]? this.state.matches: ""}></Match_card_component>
        {this.print_matches()}
        {console.log(this.state.matches[0])}
        {console.log(this.state.matches[0] ? this.state.matches[0].name : "")}
        
       
        Next Match
        <br/>
        {this.state.matches[0]? this.state.matches[0].name : " "}
        <br/>
        {this.state.matches[0]? this.state.matches[0].match_type : " "}
        
        {this.state.matches[0]? this.state.matches[0].number_of_games : " "}
        <br/>
        {this.state.matches[0]? this.state.matches[0].status : " "}

      </div>
    );
  }
} // End Class

export default App;

// Fetch this
// https://api.pandascore.co/lol/matches/upcoming?token=NCwDu3hO22ttsSy8guFfR4Zfxv0vmBOmxXRNCZlKxg8kvi-tI6o
