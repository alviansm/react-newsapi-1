import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { SearchContext } from "./components/Navbar";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const search = useContext(SearchContext);
  const apiKey = "0bc32f2370024b6eb068a5118c45ad8a";
  console.log("search: ", search);

  useEffect(() => {
    if (search) {
      axios
      .get(
        `https://newsapi.org/v2/everything?q=${search}&from=2021-10-21&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
    } else {
      axios
      .get(
        `https://newsapi.org/v2/everything?q=$obama&from=2021-10-21&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
    }
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
