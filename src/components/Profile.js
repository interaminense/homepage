import React from "react";
import Layout from "./Layout";
import Thumbnail from "./Thumbnail.js";
import { Profile } from "../utils/constants";

const THUMBNAIL_SIZE = 128;

export default () => {
  const fullYear = new Date().getFullYear();
  const age = fullYear - Profile.birthYear;
  const experienceTime = fullYear - Profile.startWoring;

  return (
    <Layout className="Profile">
      <Layout.Row>
        <Layout.Column size={12}>
          <Thumbnail
            className="Profile__thumbnail"
            size={THUMBNAIL_SIZE}
            src={Profile.image(THUMBNAIL_SIZE)}
          />
        </Layout.Column>
        <Layout.Column size={12}>
          <h2 className="Profile__name">{Profile.name}</h2>
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column size={12}>
          <p
            className="Profile__description"
            dangerouslySetInnerHTML={{
              __html: Profile.description(age, experienceTime),
            }}
          ></p>
        </Layout.Column>
      </Layout.Row>
    </Layout>
  );
};
