import React, {Component} from "react";
import API from "../utils/API";


export default class Results extends Component{

    state = {
        books: {}
    }
    componentDidMount() {
        API.searchBooks().then(results => {
            console.log(results);
            this.setState({
                books: results
            });
            console.log(results);
        });
    };

    render () {
        return (
            <h1>The Books</h1>
        )
    }



};