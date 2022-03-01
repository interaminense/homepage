import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TSocialNetwork } from "../types";

interface ISocialNetworkProps extends React.HTMLAttributes<HTMLElement> {
  socialNetwork: TSocialNetwork[];
}

const SocialNetwork: React.FC<ISocialNetworkProps> = ({ socialNetwork }) => (
  <ul className="SocialNetwork">
    {socialNetwork.map(({ icon, url }, index) => (
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

export default SocialNetwork;
