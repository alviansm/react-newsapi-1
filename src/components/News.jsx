import React, { createContext, useContext } from "react";
import { NewsContext } from "../NewsContext";
import Card from "./Card";

function News(props) {
  const { data } = useContext(NewsContext);

  return (
    <div>
      <div class="container">
        <div class="row">
            {data
              ? data.articles.map((news) => (
                  <Card data={news} key={news.url} />
                ))
              : "Processing..."}
          </div>
      </div>
    </div>
  );
}

export default News;
