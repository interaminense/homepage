import React from "react";
import { TProject } from "../../types";
import { Tag } from "../Tag/Tag";

import "./Card.scss";

export const Card: React.FC<TProject> = ({
  name,
  date,
  description,
  image,
  url,
  tags,
}) => (
  <a className="card" href={url} rel="noopener noreferrer" target="_blank">
    <div className="card__header">
      <img src={image} alt="Card" />
    </div>

    <div className="card__body">
      <h2 className="card__name">{name}</h2>

      <div className="card__date">{date}</div>

      {description && <p className="card__description">{description}</p>}

      {tags && !!tags.length && (
        <div className="card__tags">
          {tags.map((name, index) => (
            <Tag key={index} tagName={name} />
          ))}
        </div>
      )}
    </div>
  </a>
);
