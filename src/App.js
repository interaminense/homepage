import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import CardList from "./components/CardList";
import SocialNetwork from "./components/SocialNetwork";
import "./css/simple-grid-css.min.css";
import "./css/main.scss";

const getTheme = () => {
  const hour = new Date().getHours();

  return hour > 5 && hour < 17 ? "light" : "dark";
};

export default () => (
  <div className={`App App-theme--${getTheme()}`}>
    <Layout>
      <Layout.Row>
        <Layout.Column size={3}>
          <div className="sticky">
            <Layout.Row>
              <Layout.Column size={12}>
                <Profile />
              </Layout.Column>
              <Layout.Column size={12}>
                <SocialNetwork />
              </Layout.Column>
            </Layout.Row>
          </div>
        </Layout.Column>
        <Layout.Column size={9}>
          <CardList />
        </Layout.Column>
      </Layout.Row>
    </Layout>
  </div>
);
