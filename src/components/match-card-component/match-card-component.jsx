import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./match-card-styles.css";

export const Match_card_component = (props) => {
  // console.log("LINE 20 in the props");
  // console.log(props.match.name);
  // console.log(props.match.league.name);
  //props.match.scheduled_at

  // Check if this is the write way to filter stuff.
  if (props.match.league.name.toLowerCase() != "worlds") {
    return null;
  }
  let modifiedDate = new Date(props.match.scheduled_at);
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
