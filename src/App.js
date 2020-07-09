import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import CardList from "./components/CardList";
import SocialNetwork from "./components/SocialNetwork";
import "./css/simple-grid-css.min.css";

export default () => (
  <>
    <Layout>
      <Layout.Row>
        <Layout.Column size={3}>
          <Profile />
        </Layout.Column>
        <Layout.Column size={7}>
          <CardList />
        </Layout.Column>
      </Layout.Row>
    </Layout>

    <SocialNetwork />
  </>
);
