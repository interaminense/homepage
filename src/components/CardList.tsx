import React from "react";
import Card from "./Card";
import { TProject } from "../types";

interface ICardListProps extends React.HTMLAttributes<HTMLElement> {
  items: TProject[];
}

const CardList: React.FC<ICardListProps> = ({ items }) => (
  <ul className="CardList">
    {items.map((item, index) => (
      <li className="CardList__item" key={index}>
        <Card {...item} />
      </li>
    ))}
  </ul>
);

export default CardList;
