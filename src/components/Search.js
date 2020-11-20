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
                <input className="form-control mr-lg-2" value="searchBar" type="search" placeholder="Search" aria-label="Search" onChange={e => this.searchBooks(e)}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    )
}

export default Search;