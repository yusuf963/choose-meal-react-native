import React from "react";
import { View, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star.js";
import open from "../../assets/open.js";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body}
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const RatingContainer = styled(View)`
  flex-direction: row;
`;

export const RestaurantsInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4.1,
    isClosedTemporarily,
  } = restaurant;
  const rateStars = new Array(Math.ceil(rating)).fill(0);

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
      <RatingContainer>
        {rateStars.map((index) => (
          <SvgXml key={index} xml={star} width={20} height={20} />
        ))}
      </RatingContainer>
      <Title>{address}</Title>
      <SvgXml xml={open} width={20} height={20} />
    </RestaurantCard>
  );
};
