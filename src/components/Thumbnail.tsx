import React from "react";

interface IThumbnailProps extends React.HTMLAttributes<HTMLElement> {
  size: number;
  src: string;
}

const Thumbnail: React.FC<IThumbnailProps> = ({ src, size }) => (
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

export default Thumbnail;
