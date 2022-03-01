import React from "react";
import Card from "./Card";
import { Projects } from "../utils/constants";

export default () => (
  <ul className="CardList">
    {Projects.map((project, index) => (
      <li className="CardList__item" key={index}>
        <Card {...project} />
      </li>
    ))}
  </ul>
);
