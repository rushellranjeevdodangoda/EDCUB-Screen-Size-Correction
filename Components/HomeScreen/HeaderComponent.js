import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
const HeaderComponent = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/HomeScreen/Profile_pic.jpg")}
          style={styles.logo}
        />
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Home</Text>

        <Octicons name="bell" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logoContainer: {
    padding: 10,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: "contain",
  },
  notificationIcon: {
    padding: 10,
  },
});

export default HeaderComponent;
