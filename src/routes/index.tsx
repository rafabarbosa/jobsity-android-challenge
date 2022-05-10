import * as React from "react";
import { Platform } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../interfaces/RootStackParamList";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import ShowsScreen from "../screens/Shows";
import ShowDetailsScreen from "../screens/ShowDetails";
import EpisodeDetailsScreen from "../screens/EpisodeDetails";
import FavoritesScreen from "../screens/Favorites";

const Stack = createNativeStackNavigator<RootStackParamList>();
const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Shows" component={ShowsScreen} />
      <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetailsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

function customIcons(route, { focused, color, size }) {
  let iconName;
  let routeName = route.name;

  if (routeName === "Home") {
    iconName = focused ? "home" : "home-outline";
  } else if (routeName === "Favorites") {
    iconName = focused ? "heart" : "heart-outline";
  }

  return <Icon name={iconName} size={size} color={color} />;
}

const Tab = createBottomTabNavigator();
const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: (props) => customIcons(route, props),
        tabBarStyle: {
          backgroundColor: "#111",
          borderTopColor: "transparent",
          height: 90,
          paddingTop: 10,
          paddingBottom: Platform.OS === "android" ? 25 : 30,
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ddd",
      })}
    >
      <Tab.Screen name="Home" component={StackRoutes} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
};

export default Routes;
