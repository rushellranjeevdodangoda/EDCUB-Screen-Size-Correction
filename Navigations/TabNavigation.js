import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SettingScreen from "../Screens/SettingScreens/SettingScreen";
import Memories from "../Screens/Memories";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "../Components/HomeScreen/HeaderComponent";
import ActivityNavitgation from "./ActivityNavitgation";
import SavedList from "../Screens/SettingScreens/SavedList";
import SettingsNavigation from "./SettingsNavigation";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Memories") {
            iconName = focused ? "images" : "images-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#fd6f73",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={ActivityNavitgation}
        options={{ headerShown: false }}
      />

      <Tab.Screen
        name="Memories"
        component={Memories}
        options={{
          headerTitleAlign: "left",
          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigation}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
