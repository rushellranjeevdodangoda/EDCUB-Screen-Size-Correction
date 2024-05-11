import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TagComponent from "./TagComponent";

const screenwidth = Dimensions.get("window").width;
const screenheight = Dimensions.get("window").height;

const TodayActivityCard = (props) => {
  return (
    <ImageBackground
      source={{
        uri: props.imgUrl,
      }}
      style={styles.container}
      imageStyle={{ borderRadius: 15 }}
    >
      <LinearGradient
        style={styles.headingAndSub}
        colors={[props.colour, "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0.5, 1]}
      >
        <View style={styles.subcontainer}>
          <Text style={styles.heading}>{props.heading}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome
              style={{ marginRight: 1 }}
              name="star"
              size={10}
              color="white"
            />
            <Text style={styles.heading}>{props.rate}</Text>
          </View>
        </View>
        <View style={styles.subheading}>
          <Text style={styles.subheading}>{props.subHeading}</Text>
        </View>
      </LinearGradient>

      <View style={[styles.tagviews, { backgroundColor: props.colour }]}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/HomeScreen/Profile_pic.jpg")}
        />

        {props.tags.slice(0, 6).map((tag, index) => (
          <TagComponent key={index} tag={tag} />
        ))}
        {props.tags.length > 6 && (
          <Text style={{ color: "white", fontSize: 12, marginLeft: 4 }}>
            +{props.tags.length - 6}
          </Text>
        )}
      </View>
    </ImageBackground>
  );
};

export default TodayActivityCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    width: screenwidth / 1.7,
    height: screenwidth,
    objectFit: "contain",
    margin: 10,
  },
  headingAndSub: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flex: 0.4,
  },

  subcontainer: {
    display: "flex",
    flexDirection: "row",
    color: "white",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 10,
  },
  heading: {
    color: "white",
    fontSize: 12,
  },
  subheading: {
    width: "100%",
    fontSize: 15,
    display: "flex",
    justifyContent: "flex-start",
    color: "white",
    fontWeight: "bold",
    lineHeight: 18,
  },
  tagviews: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 90,
    overflow: "scroll",
    width: "100%",
  },
  profileImage: {
    width: screenwidth / 15,
    height: screenwidth / 15,
    borderRadius: screenwidth / 15,
    marginBottom: 4,
    marginRight: 4,
  },
});
