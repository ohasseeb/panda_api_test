import React from "react";
import "./search-box-style.css";

export const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <label htmlFor="inputTeam">Team </label>
      <input
        id="inputTeam"
        type="search"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}; // end class
