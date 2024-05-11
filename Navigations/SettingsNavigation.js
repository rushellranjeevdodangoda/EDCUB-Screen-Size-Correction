import { createStackNavigator } from "@react-navigation/stack";
import SavedList from "../Screens/SettingScreens/SavedList";
import SettingScreen from "../Screens/SettingScreens/SettingScreen";

const Stack = createStackNavigator();
function SettingsNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerTitleAlign: "left",

          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="SavedList"
        component={SavedList}
        options={{
          title: "Saved List",
          headerBackTitleVisible: false,
          headerTintColor: "black",
          headerTitleAlign: "left",

          headerTintColor: "black",
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigation;
