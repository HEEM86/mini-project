import React from "react";
import API from "../utils/API";
// import books from "./Books";
import search from "./Search";


// console.log(books);
function Search () {
    API.searchBooks(search) 
    return (
        <div style={{ height: 110, clear: "both", paddingTop: 120, textAlign: "center" }} className="jumbotron border border-success">       
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-lg-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={e => console.log(e)}>Search</button>
            </form>
        </div>
    )
}

export default Search;


