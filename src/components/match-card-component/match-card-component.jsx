import { render } from "@testing-library/react";
import React, { Component } from "react";

export const Match_card_component = (props) => {
  const render_matches = () => {
    if (props.match[0] != "") {
      for (var i = 0; i < props.match.length; i++) {
        return <div> {props.match[0] ? props.match[i].name : ""}</div>;
      }
    } // End if
    else if (props.match[0] == undefined) {
      render_matches();
    } else {
      return;
    }

    return;
  };

  console.log("LINE 20 in the props");
  console.log(props.match.name);
  console.log(props.match);

  return (
    <div>
      {props.match.name}
      <div>
        {" "}
        {props.match.match_type}: {props.match.number_of_games}
        <div> {"\n"}</div>
        <br />
      </div>

      {/* {this.render_matches()} */}
      {/* <div>Hello World</div> */}
    </div>
  );
};
