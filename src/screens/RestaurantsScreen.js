import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantsInfo } from "../components/RestaurantInfoCardComponent";

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <Searchbar placeholder="Search" />
      <RestaurantsInfo />
    </SafeArea>
  );
};
