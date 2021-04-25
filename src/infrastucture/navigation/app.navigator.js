import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

import { Text } from "../../components/typography/text.component";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const Tab = createBottomTabNavigator();

const TAB_ICONS = (focused) => {
  return focused
    ? {
        Restaurants: "md-restaurant",
        Settings: "md-settings",
        Map: "md-map",
      }
    : {
        Restaurants: "md-restaurant-outline",
        Settings: "md-settings-outline",
        Map: "md-map-outline",
      };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      const iconName = TAB_ICONS(focused)[route.name];
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Settings} />
      <Tab.Screen name="Settings" component={Map} />
    </Tab.Navigator>
  </NavigationContainer>
);
