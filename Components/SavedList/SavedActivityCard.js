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
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
const screenwidth = Dimensions.get("window").width;
const SavedActivity = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://plus.unsplash.com/premium_photo-1666433656515-77386ea16d5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.container}
      imageStyle={{ borderRadius: 15 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FontAwesome
          style={{ marginRight: 1 }}
          name="star"
          size={14}
          color="white"
        />
        <Text style={styles.quote}>70</Text>
      </View>
      <View>
        <Text style={styles.quote}>Create Sand Castle</Text>
        <Text style={styles.subquote}>
          Plant flowers, herbs, or vegetables and learn about gardening
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#fd6e75",
            borderRadius: 25,
            height: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>
            Start
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SavedActivity;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 10,
    borderRadius: 15,
    justifyContent: "space-between",
    width: screenwidth / 2.3,
    height: screenwidth / 2.1,
    objectFit: "contain",
    margin: 5,
    paddingBottom: 15,
  },

  quote: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    display: "flex",
    lineHeight: 40,
  },
  subquote: {
    color: "white",
    fontSize: 10,
    display: "flex",
    lineHeight: 15,
    paddingBottom: 10,
  },
});
