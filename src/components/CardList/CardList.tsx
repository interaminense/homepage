import React from "react";
import { Projects } from "../../data";
import { Card } from "../Card/Card";

import "./CardList.scss";

export const CardList = () => {
  return (
    <ul className="cardlist">
      {Projects.map((item, index) => (
        <li className="cardlist__item" key={index}>
          <Card {...item} />
        </li>
      ))}
    </ul>
  );
};
