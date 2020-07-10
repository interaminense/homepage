import React from "react";
import Card from "./Card";
import Masonry from "react-masonry-component";

const Project = {
  name: "My awesome project name",
  description: "My awesome project description",
  image: "http://www.interaminense.com/src/imgs/neon.jpg",
  url: "https://interaminense.github.io",
  date: "12 October, 2020",
  tags: ["codepen", "reactjs"],
};

const Projects = [
  {
    ...Project,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam consectetur quod excepturi dolore adipisci mollitia",
  },
  {
    ...Project,
    description:
      "Ipsa dignissimos, ut optio vero sequi, soluta tempore atque blanditiis harum cumque sit autem.",
  },
  Project,
  Project,
  {
    ...Project,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quisquam consectetur quod excepturi dolore adipisci mollitia",
    image:
      "http://localhost:8000/static/6d2f435689c8b89ab752139e547941c0/630fb/01.png",
  },
  Project,
  Project,
  Project,
  Project,
  Project,
  Project,
  Project,
  Project,
  Project,
];

export default () => (
  <Masonry className="CardList" elementType="ul">
    {Projects.map((project, index) => (
      <li className="CardList__item" key={index}>
        <Card {...project} />
      </li>
    ))}
  </Masonry>
);
