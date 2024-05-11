import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const screenwidth = Dimensions.get("window").width;
const EventCard = (props) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={{
          uri: props.imgUrl,
        }}
        style={styles.container}
        imageStyle={{ borderRadius: 15 }}
      >
        <LinearGradient
          style={styles.porfilename}
          colors={["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0.5 }}
          locations={[0, 0.4]}
        >
          <View style={styles.subcontainer}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/HomeScreen/Profile_pic.jpg")}
            />
            <Text
              style={{
                fontSize: 10,
                paddingLeft: 10,
                color: "white",
                fontWeight: "bold",
              }}
            >
              {props.name}
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default EventCard;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    width: screenwidth / 2,
    height: screenwidth / 3,
    objectFit: "contain",
    margin: 5,
  },
  subcontainer: {
    display: "flex",
    color: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  porfilename: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 10,
    borderRadius: 15,
    flex: 1,
    justifyContent: "flex-end",
  },
  profileImage: {
    width: screenwidth / 15,
    height: screenwidth / 15,
    borderRadius: screenwidth / 15,
  },
});
