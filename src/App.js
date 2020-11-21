import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
// import Search from "./components/Search"
import SearchPage from "../src/pages/SearchPage";
import SavedPage from "../src/pages/SavedPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <Router>
    <div className="Container">
      <Navbar/>
      <Jumbotron/>
      <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/books" component={SavedPage} />
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
      </Switch>

    </div>
    </Router>
  );
}


export default App;
