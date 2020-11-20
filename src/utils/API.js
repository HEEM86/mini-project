import React from "react";
import axios from "axios";


export default {
    searchBooks: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=The+Road" + search)
    }
};

