import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  Platform,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const screenwidth = Dimensions.get("window").width;
const ActivityPublish = (props) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { activity } = route.params;
  return (
    <ScrollView>
      <ImageBackground
        source={{
          uri: activity.imgUrl,
        }}
        style={styles.imagecontainer}
      >
        <SafeAreaView>
          <LinearGradient
            style={styles.headingAndSub}
            colors={["black", "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            locations={[0, 0.5]}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: "100%",
                padding: 15,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignContent: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign
                      style={{ paddingRight: 10 }}
                      name="leftcircle"
                      size={30}
                      color="white"
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      color: "white",
                      textShadowColor: "black",
                      textShadowRadius: 5,
                    }}
                  >
                    {activity.heading}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    borderRadius: 14,
                    backgroundColor: "#65c93a",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 10,
                    paddingRight: 10,
                    padding: 5,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    Completed
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    width: "100%",
                  }}
                >
                  <Text
                    style={{
                      display: "flex",
                      color: "white",
                      fontSize: 24,
                      paddingTop: 10,
                      fontWeight: "bold",
                      width: "70%",
                    }}
                  >
                    {activity.subHeading}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome
                      style={{ paddingTop: 10, paddingRight: 4 }}
                      name="star"
                      size={20}
                      color="white"
                    />
                    <Text
                      style={{
                        color: "white",
                        fontSize: 24,
                        paddingTop: 10,
                        fontWeight: "bold",
                      }}
                    >
                      {activity.rate}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ImageBackground>
      <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Photograph Your Creation
        </Text>
        <View>
          <Text style={{ fontSize: 14, paddingTop: 10, color: "grey" }}>
            Capture the moment! A photo preserves the memory of your sandy
            kingdom before the tide rolls in.
          </Text>
        </View>
        <View
          style={{
            paddingTop: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              width: "50%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "#fba8af",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto
                style={{ paddingTop: 4 }}
                name="dislike"
                size={24}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "#fba8af",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto
                style={{ paddingBottom: 4 }}
                name="like"
                size={24}
                color="white"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 50 / 2,
                backgroundColor: "#f64d5a",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                style={{ paddingTop: 3 }}
                name="heart"
                size={24}
                color="white"
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#fd6e75",
            padding: 15,
            borderRadius: 25,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
          onPress={() =>
            navigation.navigate("ActivityPublish", {
              activity: activity,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Save & Publish
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ActivityPublish;
const styles = StyleSheet.create({
  imagecontainer: {
    width: "100%",
    height: screenwidth * 1.2,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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
  profileImage: {
    width: screenwidth / 15,
    height: screenwidth / 15,
    borderRadius: screenwidth / 15,
    marginBottom: 4,
    marginRight: 4,
  },
  headingAndSub: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 15,
  },

  heading: {
    color: "white",
    fontSize: 12,
  },
  tagviews: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    paddingTop: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: 50,
    width: "100%",
  },

  textStyle1: {
    fontSize: 14,
    padding: 5,
    paddingLeft: 27,
    paddingBottom: 10,
    color: "grey",
  },

  viewGroup1: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },
});
