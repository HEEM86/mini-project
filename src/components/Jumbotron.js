import React from "react";
function Jumbotron() {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", backgroundImage: URL("https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80") }}
      className="jumbotron border border-success">
     <h1>DOOGLE BOOKS SEARCH</h1>
     <h3>Search for and save your Books of Interest</h3>
    </div>
  );
}
export default Jumbotron;