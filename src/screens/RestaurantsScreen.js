import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsInfo } from "../components/RestaurantInfoCardComponent";

const SafeArea = styled.SafeAreaView`

`;
export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <Searchbar placeholder="Search" />
      <RestaurantsInfo />
    </SafeArea>
  );
};
