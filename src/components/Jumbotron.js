import React from "react";
import { Container } from 'react';
// import "./App.css";

function Jumbotron() {
  return (
    <div className="Container"

      style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron border border-success">
     <h1>DOOGLE BOOKS SEARCH</h1>
     <h3>Search for and save your Books of Interest</h3>
    </div>
  );
}
export default Jumbotron;