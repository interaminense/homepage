import React from "react";
import { useApp } from "../../App";

import "./Container.scss";

export const Container: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const { backgroundImage } = useApp();
  console.log(backgroundImage);

  return (
    <div className="container">
      <div className="container__content" style={{ backgroundImage }}>
        {children}
      </div>
    </div>
  );
};
