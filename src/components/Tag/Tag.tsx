import React from "react";

import "./Tag.scss";

interface ITagProps {
  tagName: string;
}

export const Tag: React.FC<ITagProps> = ({ tagName }) => (
  <div className="tag">
    <div>{tagName}</div>
  </div>
);
