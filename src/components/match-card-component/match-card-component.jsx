import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./match-card-styles.css";

export const Match_card_component = (props) => {
  console.log(props.match);
  if (props.match == "Tournament is Over") {
    // console.log("in the function");
    console.log(props);
    return <div className="match-card-container">Worlds 2021 is Complete</div>;
  }

  // Check if Worlds is over

  if (props.match.league.name.toLowerCase() != "worlds") {
    return (
      <div>
        {/* This is a Recursive Call */}
        <Match_card_component
          match={"Tournament is Over"}
        ></Match_card_component>
      </div>
    );
  }
  let modifiedDate = new Date(props.match.scheduled_at);

  console.log("NAME LINE 17", props.match.name);
  return (
    <div className="match-card-container">
      {props.match.name}
      <br />
      <div className="number-of-games">
        {/* Add Padding to this in CSS */} Best of:{" "}
        {props.match.number_of_games}
        <div> {"\n"}</div>
        <div>{modifiedDate.toString()}</div>
        <br />
      </div>

      {/* {this.render_matches()} */}
      {/* <div>Hello World</div> */}
    </div>
  );
};
