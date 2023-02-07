import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialNetwork as SocialNetworkData } from "../../data";

import "./SocialNetwork.scss";

export const SocialNetwork = () => {
  return (
    <ul className="social-network">
      {SocialNetworkData.map(({ icon, url }) => (
        <li className="social-network__item" key={url}>
          <a
            className="social-network__link"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            title={url}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};
