import React from "react";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import CardList from "./components/CardList";
import Header from "./components/Header";
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
          <Layout.Column className="App__left-column" size={3}>
            <div className="sticky">
              <Layout.Row>
                <Layout.Column size={12}>
                  <Profile {...ProfileData} />
                  <SocialNetwork socialNetwork={SocialNetworkData} />
                </Layout.Column>
              </Layout.Row>
            </div>
          </Layout.Column>
          <Layout.Column className="App__right-column" size={9}>
            <Header />
            <CardList items={formatProjects(Projects)} />
          </Layout.Column>
        </Layout.Row>
      </Layout>
    </div>
  );
};

export default () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
