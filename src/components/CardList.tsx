import React, { useContext } from "react";
import Card from "./Card";
import { TProject } from "../types";
import AppContext from "../AppContext";
import { Language } from "../utils/constants";

interface ICardListProps extends React.HTMLAttributes<HTMLElement> {
  items: TProject[];
}

const findItemsByTags = (tags?: string[], keyword?: string): boolean => {
  return (
    !keyword ||
    !!tags?.find((tag) => tag.toLowerCase().includes(keyword.toLowerCase()))
  );
};

const CardList: React.FC<ICardListProps> = ({ items }) => {
  const { keyword } = useContext(AppContext);

  const filteredItems = items.filter(({ tags }) =>
    findItemsByTags(tags, keyword)
  );

  return (
    <>
      {!!filteredItems.length ? (
        <ul className="CardList">
          {filteredItems.map((item, index) => (
            <li className="CardList__item" key={index}>
              <Card {...item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="CardList-empty-state">
          <p>{Language.ThereAreNoCardsWithThisFilter}</p>
        </div>
      )}
    </>
  );
};

export default CardList;
