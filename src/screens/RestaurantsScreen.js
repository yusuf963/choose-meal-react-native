import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Searchbar } from "react-native-paper";

// import components
import { RestaurantsInfo } from "../components/RestaurantInfoCardComponent";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Searchbar placeholder="Search" />
      <RestaurantsInfo />
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
        <ExpoStatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});
