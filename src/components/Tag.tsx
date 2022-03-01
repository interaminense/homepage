import React from "react";

interface ITagProps extends React.HTMLAttributes<HTMLElement> {
  tagName: string;
}

const Tag: React.FC<ITagProps> = ({ tagName }) => (
  <div className="Tag">
    <span>{tagName}</span>
  </div>
);

export default Tag;
