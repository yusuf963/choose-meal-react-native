import React from "react";
import { FlatList, StatusBar, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantsInfoCard } from "../components/RestaurantInfoCardComponent";
import { Spacer } from "../components/spacer/Spacer";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  }
})``;

export const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantsInfoCard restaurant={item} />
            </Spacer>
          )}
          //eslint-disable-next-line react-native/no-inline-styles 
          // contentContainerStyle={{ padding: 26 }}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
