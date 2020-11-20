import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
// import Search from "./components/Search"
import SearchPage from "../src/Pages/SearchPage";
import SavedPage from "../src/Pages/SavedPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <Router>
    <div>
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
