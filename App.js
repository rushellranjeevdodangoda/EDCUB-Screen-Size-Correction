import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginNavigation from "./Navigations/LoginNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
