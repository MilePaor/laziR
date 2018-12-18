import React from "react";
import styled from "styled-components";

import "./news.css";

const NewsItemDiv = styled.div`
  width: 49%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const NewsItem = ({ image, title, description, url }) => (
  <NewsItemDiv className="card">
    <div className="card-image">
      {image && <img src={image} alt="news" />}
      <a
        className="btn-floating halfway-fab waves-effect waves-light red"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ bottom: !image && "-30px" }}
      >
        <i className="material-icons">arrow_forward</i>
      </a>
    </div>
    <div className="card-content">
      <span className="card-title">{title}</span>
      <p>{description}</p>
    </div>
  </NewsItemDiv>
);

export default NewsItem;
