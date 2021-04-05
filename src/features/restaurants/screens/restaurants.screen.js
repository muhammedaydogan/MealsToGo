import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const isAndroid = Platform.OS === "android";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      {isAndroid ? <View style={styles.statusBar} /> : <View />}
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: isAndroid ? StatusBar.currentHeight : 0,
    // paddingTop: 10,
  },
  search: { padding: 16, backgroundColor: "mediumvioletred" },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "indigo",
  },
  statusBar: {
    backgroundColor: "mediumvioletred",
    height: StatusBar.currentHeight,
  },
});
