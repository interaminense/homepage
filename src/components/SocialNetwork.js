import React from "react";
import {
  faBehance,
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNetwork = [
  {
    icon: faGithub,
    url: "http://github.com/interaminense",
  },
  {
    icon: faCodepen,
    url: "http://codepen.io/interaminense",
  },
  {
    icon: faBehance,
    url: "http://behance.net/imcreator",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/adriano-interaminense-405a90b3/",
  },
  {
    icon: faInstagram,
    url: "http://twitter.com/adinteraminense",
  },
  {
    icon: faTwitter,
    url: "http://twitter.com/adinteraminense",
  },
];

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
