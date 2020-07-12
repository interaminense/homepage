import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialNetwork } from "../utils/constants";

export default () => (
  <ul className="SocialNetwork">
    {SocialNetwork.map(({ icon, url }, index) => (
      <li className="SocialNetwork__item" key={index}>
        <a
          className="SocialNetwork__link"
          href={url}
          rel="noopener noreferrer"
          target="_blank"
          title={url}
        >
          <div>
            <FontAwesomeIcon icon={icon} />
          </div>
        </a>
      </li>
    ))}
  </ul>
);
