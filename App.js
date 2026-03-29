import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import CartScreen from "./CartScreen";
import ProductDetailScreen from "./ProductDetailScreen";
import SearchScreen from "./SearchScreen";
import FavoritesScreen from "./FavoritesScreen";
import BeveragesScreen from "./BeveragesScreen";
import FiltersScreen from "./FiltersScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AccountScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Account Screen</Text>
  </View>
);

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#53b175",
        tabBarInactiveTintColor: "#181725",
        tabBarStyle: { height: 60, paddingBottom: 10, paddingTop: 10 },
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Shop") iconName = "storefront-outline";
          else if (route.name === "Explore") iconName = "search-outline";
          else if (route.name === "Cart") iconName = "cart-outline";
          else if (route.name === "Favourite") iconName = "heart-outline";
          else if (route.name === "Account") iconName = "person-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Shop" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favourite" component={FavoritesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        <Stack.Screen
          name="Filters"
          component={FiltersScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
