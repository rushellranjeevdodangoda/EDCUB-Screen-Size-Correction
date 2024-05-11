import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Switch,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const screenwidth = Dimensions.get("window").width;
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const SettingScreen = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledDark, setIsEnabledDark] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchDark = () =>
    setIsEnabledDark((previousState) => !previousState);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View>
        <TouchableOpacity style={styles.maincontainer}>
          <View style={styles.container}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/HomeScreen/Profile_pic.jpg")}
            />
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.name}>Anya & Ciri</Text>
              <Text style={styles.quote}>anyachkoltra95@gmail.com</Text>
            </View>
            <MaterialIcons name="navigate-next" size={50} color="white" />
          </View>
        </TouchableOpacity>
        <View>
          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenwidth - 50,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderWidth: 1,
                borderBottomWidth: 0,
                padding: 10,
                borderColor: "#e2e2e2",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="user" size={20} color="black" />
                <Text style={styles.settingmenuname}>Account</Text>
              </View>
              <MaterialIcons name="navigate-next" size={25} color="grey" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenwidth - 50,
                borderWidth: 1,
                padding: 10,
                borderColor: "#e2e2e2",
                borderBottomWidth: 0,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <AntDesign name="setting" size={20} color="black" />
                <Text style={styles.settingmenuname}>Preference</Text>
              </View>
              <MaterialIcons name="navigate-next" size={25} color="grey" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenwidth - 50,
                borderWidth: 1,
                padding: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderColor: "#e2e2e2",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather name="help-circle" size={20} color="black" />
                <Text style={styles.settingmenuname}>Help</Text>
              </View>
              <MaterialIcons name="navigate-next" size={25} color="grey" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenwidth - 50,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderWidth: 1,
                borderBottomWidth: 0,
                padding: 10,
                borderColor: "#e2e2e2",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Feather name="check-square" size={20} color="black" />
                <Text style={styles.settingmenuname}>
                  Remind Me Notification
                </Text>
              </View>
              <Switch
                trackColor={{ false: "grey", true: "#27b52b" }}
                thumbColor={isEnabled ? "white" : "#f4f3f4"}
                ios_backgroundColor="#dedfe1"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: screenwidth - 50,
                borderWidth: 1,
                padding: 10,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                borderColor: "#e2e2e2",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Ionicons name="moon-outline" size={20} color="black" />
                <Text style={styles.settingmenuname}>Dark Mode</Text>
              </View>
              <Switch
                trackColor={{ false: "grey", true: "#27b52b" }}
                thumbColor={isEnabledDark ? "white" : "#f4f3f4"}
                ios_backgroundColor="#dedfe1"
                onValueChange={toggleSwitchDark}
                value={isEnabledDark}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              width: screenwidth - 50,
              borderWidth: 1,
              padding: 10,
              borderRadius: 15,
              borderColor: "#e2e2e2",
            }}
            onPress={() => navigation.navigate("SavedList")}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome6 name="list-alt" size={20} color="black" />
              <Text style={styles.settingmenuname}>Saved List</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.count}>164</Text>
              <MaterialIcons name="navigate-next" size={25} color="grey" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          width: screenwidth - 50,
          borderWidth: 1,
          padding: 10,
          borderRadius: 15,
          borderColor: "#e2e2e2",
          marginBottom: 40,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Feather name="log-out" size={20} color="black" />
          <Text style={styles.settingmenuname}>Log Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#ff5e64",
    width: screenwidth - 50,
    marginVertical: 20,
    paddingVertical: 5,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },

  profileImage: {
    width: screenwidth / 4.5,
    height: screenwidth / 4.5,
    borderRadius: screenwidth / 6,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 35,
  },

  quote: {
    color: "white",
    fontSize: 14,
    display: "flex",
    lineHeight: 20,
  },
  welcomeTextContainer: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
  },

  settingmenuname: {
    fontSize: 16,
    paddingLeft: 10,
  },
  count: {
    fontSize: 16,
    paddingLeft: 10,
    color: "grey",
  },
});
