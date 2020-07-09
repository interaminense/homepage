import React from "react";

export default ({ src }) => (
  <div className="Thumbnail">
    <img
      className="Thumbnail__image"
      src={src}
      alt="Profile"
      width={64}
      height={64}
    />
  </div>
);
