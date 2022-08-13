import React from "react";
import { View, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantsInfo = () => {
  return (
    <View>
      <Card elevation={5}>
        <Card.Cover style={styles.container} source={{
          uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        }}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
  },
});
