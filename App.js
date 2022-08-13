import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
        <Text style={styles.text}>Publishing to Expo store</Text>
        <Text style={styles.text}>Publishing to Expo store</Text>
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
export default App;
