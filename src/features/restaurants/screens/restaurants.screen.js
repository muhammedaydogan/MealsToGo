import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const StatusBarCover = styled(View)`
  background-color: mediumvioletred;
  height: ${StatusBar.currentHeight}px;
`;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? StatusBar.currentHeight : 0}px;

  /* Andrei Approach: Only set it if currentHeight exists: */
  /* ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`} */
`;

const SearchContainer = styled(View)`
  padding: 16px;
  background-color: mediumvioletred;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: indigo;
`;

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      {isAndroid ? <StatusBarCover /> : <View />}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
