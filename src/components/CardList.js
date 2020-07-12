import React from "react";
import Card from "./Card";
import Masonry from "react-masonry-component";
import { Projects } from "../utils/constants";

export default () => (
  <Masonry className="CardList" elementType="ul">
    {Projects.map((project, index) => (
      <li className="CardList__item" key={index}>
        <Card {...project} />
      </li>
    ))}
  </Masonry>
);
