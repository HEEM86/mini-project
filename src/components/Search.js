import React, { Component } from "react";
//import { Input, FormBtn } from "../components/Form";

import API from "../utils/API";

import search from "./Search";









// console.log(books);
function Search () {
    
    return (
        
        <div style={{ height: 50, clear: "both", paddingTop: 5, textAlign: "center", marginLeft: 530, marginRight: 650 }}>
                 
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-lg-2" type="search" placeholder="Search Books" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={e => console.log(e)}>Search</button>
            </form>
        </div>
    )
}

export default Search;

