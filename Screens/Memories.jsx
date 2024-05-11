import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const screenwidth = Dimensions.get("window").width;
const Memories = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          paddingHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>November</Text>
        <TouchableOpacity
          style={{
            display: "flex",
            borderRadius: 20,
            padding: 10,
            backgroundColor: "#fc6e76",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Create Collage
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          paddingHorizontal: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>October</Text>
        <TouchableOpacity
          style={{
            display: "flex",
            borderRadius: 20,
            padding: 10,
            backgroundColor: "#fc6e76",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Create Collage
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
        <Image
          style={styles.imageStyle}
          source={require("../assets/HomeScreen/greenkid.jpg")}
        />
      </View>
    </ScrollView>
  );
};

export default Memories;
const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 15,
    width: screenwidth / 2.5,
    height: screenwidth / 2.8,
    margin: 5,
  },
});
