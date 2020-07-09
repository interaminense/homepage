import React from "react";
import Layout from "./Layout";
import Thumbnail from "./Thumbnail.js";

const Profile = {
  name: "Adriano Interaminense",
  description: (age, experienceTime) =>
    `Hello, how are you? I'm ${age} years old. At least ${experienceTime} years of professional experience as Frontend, I currently work at Liferay as Frontend Engineer and I <3 what I do!`,
  image:
    "https://avatars2.githubusercontent.com/u/12699849?s=64&u=813da44f9c0ec4a88aa0be8ce52f35bc0b123a74&v=4",
  birthYear: 1989,
  startWoring: 2009,
};

export default () => {
  const fullYear = new Date().getFullYear();
  const age = fullYear - Profile.birthYear;
  const experienceTime = fullYear - Profile.startWoring;

  return (
    <Layout className="Profile">
      <Layout.Row>
        <Layout.Column size={2}>
          <Thumbnail src={Profile.image} />
        </Layout.Column>
        <Layout.Column size={10}>
          <h3>{Profile.name}</h3>
        </Layout.Column>
      </Layout.Row>
      <Layout.Row>
        <Layout.Column size={12}>
          {Profile.description(age, experienceTime)}
        </Layout.Column>
      </Layout.Row>
    </Layout>
  );
};
