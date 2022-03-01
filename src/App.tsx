import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import CardList from "./components/CardList";
import SocialNetwork from "./components/SocialNetwork";
import {
  Profile as ProfileData,
  Projects,
  SocialNetwork as SocialNetworkData,
} from "./data";
import { formatProjects } from "./utils/utils";

import "./css/simple-grid-css.min.css";
import "./css/main.scss";
import AppContext, { AppContextProvider } from "./AppContext";

const App: React.FC<React.HTMLAttributes<HTMLElement>> = () => {
  const { theme } = React.useContext(AppContext);

  return (
    <div className={`App App-theme--${theme}`}>
      <Layout>
        <Layout.Row>
          <Layout.Column size={3}>
            <div className="sticky">
              <Layout.Row>
                <Layout.Column size={12}>
                  <Profile {...ProfileData} />
                </Layout.Column>
                <Layout.Column size={12}>
                  <SocialNetwork socialNetwork={SocialNetworkData} />
                </Layout.Column>
              </Layout.Row>
            </div>
          </Layout.Column>
          <Layout.Column size={9}>
            <CardList items={formatProjects(Projects)} />
          </Layout.Column>
        </Layout.Row>
      </Layout>
    </div>
  );
};

export default () => {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
};
