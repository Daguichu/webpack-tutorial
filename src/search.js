"use strick";

import React from "react";
import ReactDom from "react-dom";
import './search.css';

class Search extends React.Component {
  constructor() {}

  render() {
    return <div className="search-text">search</div>;
  }
}

ReactDom.render(<Search />, Document.getElementById("root"));
