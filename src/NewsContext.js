import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const [search, setSearch] = useState();
  const apiKey = "0bc32f2370024b6eb068a5118c45ad8a";

  function getData(e) {
    e.preventDefault();
    console.log("button clicked.");
    axios
    .get(
      `https://newsapi.org/v2/everything?q=${search}&from=2021-11-18&sortBy=publishedAt&apiKey=${apiKey}`)
    .then((response) => setData(response.data))
    .catch((error) => console.log(error));
  }

  return (
    <NewsContext.Provider value={{ data }}>
      <div>
          <nav className="navbar navbar-light bg-light">
          <div className="container">
              <a className="navbar-brand">React NewsAPI</a>
              <form className="d-flex">
                <input className="form-control me-2" id="searchInput" type="search" placeholder="Search" aria-label="Search" onChange={event => setSearch(event.target.value)}/>
                <button onClick={getData}>Search</button>
              </form>
          </div>
          </nav>
      </div>
      <div>Search: {search}</div>    
      {props.children}
    </NewsContext.Provider>
  );
};
