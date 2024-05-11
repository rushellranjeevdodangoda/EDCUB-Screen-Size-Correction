import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import ProfileCard from "../Components/HomeScreen/ProfileCard";
import TodayActivityGallery from "../Components/HomeScreen/TodayActivityGallery";
import EventCardGallery from "../Components/HomeScreen/EventCardGallery";

const screenwidth = Dimensions.get("window").width;

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ProfileCard />
        <View style={styles.catergotyToday}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Today Activities
          </Text>
          <Text style={{ fontSize: 16, color: "grey" }}>View All</Text>
        </View>
        <TodayActivityGallery />
        <View
          style={{
            height: 200,
            width: screenwidth,
            backgroundColor: "black",
            marginBottom: 20,
            marginTop: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Advertisement
          </Text>
        </View>

        <View style={styles.catergotyToday}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Special Events
          </Text>
          <Text style={{ fontSize: 16, color: "grey" }}>Upcoming</Text>
        </View>
        <EventCardGallery />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  catergotyToday: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
});
