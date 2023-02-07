import React, { useState } from "react";
import { Profile as ProfileData } from "../../data";
import { Tag } from "../Tag/Tag";

import "./Profile.scss";

export const Profile = () => {
  const { brief, description, image, name, skills } = ProfileData;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="profile">
      <div className="profile__content">
        <div className="profile__thumbnail">
          <img src={image(250)} alt="github profile" />
        </div>
        <h1 className="profile__name">{name}</h1>
        <div className="profile__description">
          <div className="profile__brief">{brief}</div>

          {showDescription && (
            <>
              <div className="profile__more-about-me">
                <div>
                  <h3>About me</h3>
                  {description}
                </div>
                <div>
                  <h3>Skills</h3>
                  <div className="profile__skills">
                    {skills.map((skill) => (
                      <Tag tagName={skill} />
                    ))}
                  </div>
                </div>
              </div>

              <button
                className="profile__button"
                onClick={() => setShowDescription(false)}
              >
                hide it
              </button>
            </>
          )}
        </div>
        {!showDescription && (
          <button
            className="profile__button"
            onClick={() => setShowDescription(true)}
          >
            more about me
          </button>
        )}
      </div>
    </div>
  );
};
