import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const screenwidth = Dimensions.get("window").width;
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import SavedActivityCard from "../../Components/SavedList/SavedActivityCard";
import { ScrollView } from "react-native-gesture-handler";
export default function SavedList() {
  return (
    <ScrollView>
      <View style={styles.maincontainer}>
        <View style={styles.barcontainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.quote}>Achievement Level</Text>
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
                size={18}
                color="black"
              />
              <Text style={styles.quote}>70</Text>
            </View>
          </View>
          <Progress.Bar
            color="#ff8088"
            unfilledColor="#ffcbce"
            borderWidth={0}
            progress={0.7}
            width={screenwidth - 40}
            height={12}
            borderRadius={0}
          />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingTop: 15,
            paddingHorizontal: 5,
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SavedActivityCard key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  barcontainer: {
    marginTop: 4,
    color: "#fff",
    marginBottom: 4,
  },

  maincontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  quote: {
    color: "black",
    fontSize: 18,
    display: "flex",
    lineHeight: 40,
  },
});
