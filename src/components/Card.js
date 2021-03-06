import React from "react";

export default ({ name, date, description, image, url, tags }) => (
  <a className="Card" href={url} rel="noopener noreferrer" target="_blank">
    <div className="Card__header">
      <img src={image} alt="Card" />
    </div>

    <div className="Card__body">
      <h2 className="Card__name">{name}</h2>

      <span>{date}</span>

      <p className="Card__description">{description}</p>

      {!!tags.length && (
        <div className="Card__tags">
          {tags.map((tag, index) => (
            <span className="Card__tag" key={index}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </a>
);
