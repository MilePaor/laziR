import React from "react";
import NewsItem from "./NewsItem";
import styled from "styled-components";

const WrapperNews = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const News = ({ data }) => {
  return (
    <WrapperNews>
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
    </WrapperNews>
  );
};

export default News;
