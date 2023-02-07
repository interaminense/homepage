import React, { createContext, useContext } from "react";
import { CardList } from "./components/CardList/CardList";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Profile } from "./components/Profile/Profile";
import { SocialNetwork } from "./components/SocialNetwork/SocialNetwork";
import { getRndInteger } from "./utils";

const AppContext = createContext({ backgroundImage: "", path: "" });

export function useApp() {
  return useContext(AppContext);
}

export function App() {
  const int = getRndInteger(1, 16);
  const backgroundPath = `/homepage/assets/${int}.png`;
  const backgroundImage = `url(${backgroundPath})`;
  const body = document.querySelector("body");

  // @ts-ignore

  body.style.backgroundImage = backgroundImage;

  return (
    <AppContext.Provider value={{ backgroundImage, path: backgroundPath }}>
      <Container>
        <SocialNetwork />
        <Profile />
        <CardList />
        <Footer />
      </Container>
    </AppContext.Provider>
  );
}
