import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/screens/RestaurantsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import {
  useFonts as _useFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";

const App = () => {
  const [oswaldFontsLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoFontsLoaded] = useFonts({
    Lato_400Regular,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
        <StatusBar style="auto" />
      </ThemeProvider>
    </>
  );
};

export default App;
