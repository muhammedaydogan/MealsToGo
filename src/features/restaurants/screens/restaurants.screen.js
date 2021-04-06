import React, { useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const StatusBarCover = styled(View)`
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
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  padding: ${(props) => props.theme.space[2]};
`;

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeArea>
      {isAndroid ? <StatusBarCover /> : <View />}
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
