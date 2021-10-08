import React from "react";
import { Match_card_component } from "../match-card-component/match-card-component";
import "./match-card-list-styles.css";

export const Match_Card_List_Component = (props) => {
  console.log(props);
  return (
    <div className="match-card-list">
      {props.match.map((matches) => (
        <Match_card_component
          key={matches.id}
          match={matches}
        ></Match_card_component>
      ))}
    </div>
  );
}; // end Component
