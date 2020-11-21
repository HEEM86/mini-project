import React from "react";

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <h1>DOOGLE BOOKS</h1>
      <div style={{ height: 50, clear: "both", paddingTop: 10, textAlign: "center", marginLeft: 40}} className="navbar-brand" href="/"> 
        SEARCH
      </div>
      <br></br>
      <div style={{ height: 50, clear: "both", paddingTop: 10, textAlign: "center", marginLeft: 0}}className="navbar-brand" href="/">
        SAVED
      </div>
    
    </nav>
  );
}
export default Navbar;