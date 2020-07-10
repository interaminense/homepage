import React from "react";

export default ({ src, size }) => (
  <div
    className="Thumbnail"
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  >
    <img
      className="Thumbnail__image"
      src={src}
      alt="Profile"
      width={size}
      height={size}
    />
  </div>
);
