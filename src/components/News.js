import React from "react";

import NewsItem from "./NewsItem";

import "../css/styles.css";

const News = ({ data }) => {
  return (
    <div>
      <div className="wrapper wrapper--news">
        {data.map((article, index) => {
          return (
            <NewsItem
              image={article.urlToImage}
              title={article.title}
              description={article.description}
              url={article.url}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;
