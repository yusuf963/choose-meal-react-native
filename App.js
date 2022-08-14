import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { RestaurantScreen } from "./src/screens/RestaurantsScreen";

const App = () => {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
};

export default App;
