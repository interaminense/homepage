import React from "react";
import Layout from "./Layout";
import Thumbnail from "./Thumbnail";
import { TProfile } from "../types";
import AppContext from "../AppContext";
import { Language } from "../utils/constants";

const THUMBNAIL_SIZE = 128;

interface IProfileProps extends React.HTMLAttributes<HTMLElement>, TProfile {}

const Profile: React.FC<IProfileProps> = ({
  birthYear,
  startWoring,
  image,
  name,
  description,
}) => {
  const fullYear = new Date().getFullYear();
  const age = fullYear - birthYear;
  const experienceTime = fullYear - startWoring;

  const { theme, toggleTheme } = React.useContext(AppContext);

  return (
    <Layout className="Profile">
      <Layout.Row>
        <Layout.Column size={12}>
          <Thumbnail
            className="Profile__thumbnail"
            size={THUMBNAIL_SIZE}
            src={image(THUMBNAIL_SIZE)}
          />
          <button
            title={Language.ToggleTheme}
            className="Profile__toggle-theme"
            onClick={() => {
              toggleTheme({ theme: theme === "light" ? "dark" : "light" });
            }}
          />
        </Layout.Column>
        <Layout.Column size={12}>
          <h2 className="Profile__name">{name}</h2>
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column size={12}>
          <p
            className="Profile__description"
            dangerouslySetInnerHTML={{
              __html: description(age, experienceTime),
            }}
          ></p>
        </Layout.Column>
      </Layout.Row>
    </Layout>
  );
};

export default Profile;
