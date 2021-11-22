import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import Card from "./Card";
import { SearchProvider } from "./Navbar";

function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <SearchProvider></SearchProvider>
      <div class="container">
        <div class="row">
            {data
              ? data.articles.map((news) => (
                  <Card data={news} key={news.url} />
                ))
              : "Loading..."}
          </div>
      </div>
    </div>
  );
}

export default News;
