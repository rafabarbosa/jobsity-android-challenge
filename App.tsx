import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { GlobalProvider } from "./src/contexts/GlobalContext";
import { FavoritesProvider } from "./src/contexts/FavoritesContext";
import Routes from "./src/routes";

function App() {
  return (
    <GlobalProvider>
      <FavoritesProvider>
        <StatusBar style="light" translucent backgroundColor="transparent" />
        <Routes />
      </FavoritesProvider>
    </GlobalProvider>
  );
}

export default App;
