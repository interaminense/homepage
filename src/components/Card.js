import React from "react";

export default ({ name, description, image, url }) => (
  <div className="Card">
    <div className="Card__header">
      <img src={image} alt="Card" />
    </div>
    <h3 className="Card__name">{name}</h3>
    <p className="Card__description">{description}</p>
    {url && (
      <a
        className="Card__link"
        href={url}
        rel="noopener noreferrer"
        target="_blank"
      >
        read more
      </a>
    )}
  </div>
);
