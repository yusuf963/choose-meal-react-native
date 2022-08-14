import React from "react";
import { View, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const StyledView = styled.View`
  width: 100%;
  height: 200px;
`;

const StyledCardCover = styled(Card.Cover)`
  padding: 40px;
  height: 200px;
`;

export const RestaurantsInfo = () => {
  return (
    <StyledView>
      <Card elevation={5}>
        <StyledCardCover
          source={{
            uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
          }}
        />
      </Card>
    </StyledView>
  );
};
