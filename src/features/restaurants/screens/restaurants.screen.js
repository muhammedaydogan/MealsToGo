import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../utils/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { log } from "react-native-reanimated";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => {
  // const [searchQuery, setSearchQuery] = useState("");

  // const onChangeSearch = (query) => setSearchQuery(query);

  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  console.log("error: " + error);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          // onChangeText={onChangeSearch}
          // value={searchQuery}
        />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
