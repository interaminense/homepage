import React from "react";
import Card from "./Card";
import Masonry from "react-masonry-component";

const Project = {
  name: "My awesome project name",
  description: "My awesome project description",
  image: "",
  url: "https://interaminense.github.io",
  date: "12/10/2020",
};

const Projects = [Project, Project, Project, Project, Project, Project];

export default () => (
  <Masonry className="CardList" elementType={"ul"}>
    {Projects.map((project, index) => (
      <li className="CardList__item" key={index}>
        <Card {...project} />
      </li>
    ))}
  </Masonry>
);
