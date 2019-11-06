"use strick";

import React from "react";
import ReactDom from "react-dom";
import "./search.less";

class Search extends React.Component {
  render() {
    return <div className="search-text">search context</div>;
  }
}

ReactDom.render(<Search />, document.getElementById("root"));
