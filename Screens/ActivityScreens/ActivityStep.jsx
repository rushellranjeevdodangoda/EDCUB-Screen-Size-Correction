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
import TagComponent from "../../Components/HomeScreen/TagComponent";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const screenwidth = Dimensions.get("window").width;
const ActivityStep = (props) => {
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
            colors={[activity.color, "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            locations={[0.4, 0.7]}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: "100%",
                padding: 15,
                paddingBottom: 25,
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
                    backgroundColor: "#f85e66",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 10,
                    paddingRight: 10,
                    padding: 5,
                  }}
                >
                  <Text style={{ color: "white", fontWeight: "bold" }}>
                    In Progress
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
                <View
                  style={[styles.tagviews, { backgroundColor: props.colour }]}
                >
                  <Image
                    style={styles.profileImage}
                    source={require("../../assets/HomeScreen/Profile_pic.jpg")}
                  />

                  {activity.tags.slice(0, 10).map((tag, index) => (
                    <TagComponent key={index} tag={tag} />
                  ))}
                  {activity.tags.length > 10 && (
                    <Text
                      style={{ color: "white", fontSize: 12, marginLeft: 4 }}
                    >
                      +{activity.tags.length - 10}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </ImageBackground>
      <View style={{ display: "flex", flexDirection: "column", padding: 25 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Activity Steps</Text>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Choose a Prime Spot
            </Text>
          </View>
          <Text
            style={{ fontSize: 14, padding: 5, paddingLeft: 27, color: "grey" }}
          >
            Select a flat area to the waters edge to ensure sandcastle gets the
            right consistency.
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Gather Your Tools
            </Text>
          </View>
          <Text style={styles.textStyle1}>
            Arm yourself with ouckets. shovels, and any sculpting toms you
            prefer, the merrier!
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Moisten the Sand
            </Text>
          </View>
          <Text style={styles.textStyle1}>
            Mix water inta the sand until it reaches a moldable consistency. Too
            dry, and it won't hold: too wet, and it'll collapse.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <View style={styles.viewGroup2}>
              <Image
                style={{
                  borderRadius: 15,
                  width: screenwidth / 3,
                  height: screenwidth / 3.5,
                }}
                source={require("../../assets/HomeScreen/greenkid.jpg")}
              />
              <Text style={styles.capttionStyle}>Caption to the picture 1</Text>
            </View>
            <View style={styles.viewGroup2}>
              <Image
                style={{
                  borderRadius: 15,
                  width: screenwidth / 3,
                  height: screenwidth / 3.5,
                }}
                source={require("../../assets/HomeScreen/greenkid.jpg")}
              />
              <Text style={styles.capttionStyle}>
                Caption to the picture 2. Caption in the line two
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Build a Foundation
            </Text>
          </View>
          <Text
            style={{ fontSize: 14, padding: 5, paddingLeft: 27, color: "grey" }}
          >
            Start with a solid oase by filling a bucket with wet sand and
            flipping it upside down. Pat it down firmly.
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Layer by Layer
            </Text>
          </View>
          <Text style={styles.textStyle1}>
            Add layers using more buckets or by piing ane shaping wet sand with
            your Yards. Smooth each layer for stability.
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <View style={styles.viewGroup2}>
              <Image
                style={{
                  borderRadius: 15,
                  width: screenwidth / 3,
                  height: screenwidth / 3.5,
                }}
                source={require("../../assets/HomeScreen/greenkid.jpg")}
              />
              <Text style={styles.capttionStyle}>Caption to the picture 1</Text>
            </View>
            <View style={styles.viewGroup2}>
              <Image
                style={{
                  borderRadius: 15,
                  width: screenwidth / 3,
                  height: screenwidth / 3.5,
                }}
                source={require("../../assets/HomeScreen/greenkid.jpg")}
              />
              <Text style={styles.capttionStyle}>
                Caption to the picture 2. Caption in the line two
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Carve and Sculpt
            </Text>
          </View>
          <Text style={styles.textStyle1}>
            Use Shovels. hands, or sculptlljg tools to shape your castle, Get
            creative with turrets. walls. end moats.
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Detailing and Decorating:
            </Text>
          </View>
          <Text style={styles.textStyle1}>
            Enhance your masterpiece with seashells. sticks. or other beach
            treasures. Let your imagination run wild!
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Weather Suitability
            </Text>
          </View>
          <Text style={styles.textStyle1}>Suitable for Sunny/Good Weather</Text>
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
            Mark Complete
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ActivityStep;
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

  viewGroup2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },

  capttionStyle: {
    width: screenwidth / 3,
    display: "flex",
    textAlign: "center",
    paddingTop: 5,
  },
});
