import React from "react";

import "../css/styles.css";

const NewsItem = ({ image, title, description, url }) => (
  <div className="news__item card">
    <div className="card-image">
      <img src={image} alt="news" />
      <a
        className="btn-floating halfway-fab waves-effect waves-light red"
        href={url}
      >
        <i className="material-icons">arrow_forward</i>
      </a>
    </div>
    <div className="card-content">
      <span className="card-title">{title}</span>
      <p>{description}</p>
    </div>
  </div>
);

export default NewsItem;
