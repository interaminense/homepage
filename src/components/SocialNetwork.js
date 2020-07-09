import React from "react";

const Item = { name: "urlName", url: "https://interaminense.github.io" };

const SocialNetwork = [Item, Item, Item, Item, Item];

export default () => (
  <ul className="SocialNetWork">
    {SocialNetwork.map(({ name, url }, index) => (
      <li className="SocialNetwork__item" key={index}>
        <a
          className="SocialNetwork__link"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </a>
      </li>
    ))}
  </ul>
);
