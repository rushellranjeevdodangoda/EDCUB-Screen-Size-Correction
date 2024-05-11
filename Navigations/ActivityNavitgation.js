import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ActivityInformation from "../Screens/ActivityScreens/ActivityInformation";
import ActivityStep from "../Screens/ActivityScreens/ActivityStep";
import ActivityPublish from "../Screens/ActivityScreens/ActivityPublish";
import HeaderComponent from "../Components/HomeScreen/HeaderComponent";

const Stack = createStackNavigator();
const ActivityNavitgation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home_"
        component={HomeScreen}
        options={{
          header: ({ navigation }) => (
            <HeaderComponent navigation={navigation} />
          ),
        }}
      />
      <Stack.Screen
        name="ActivityInformation"
        component={ActivityInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityStep"
        component={ActivityStep}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ActivityPublish"
        component={ActivityPublish}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ActivityNavitgation;
