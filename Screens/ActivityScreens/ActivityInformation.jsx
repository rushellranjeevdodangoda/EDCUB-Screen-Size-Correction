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
const ActivityInformation = (props) => {
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

                <Fontisto name="favorite" size={24} color="white" />
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
                    To do
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
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Information</Text>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Introduction
            </Text>
          </View>
          <Text style={styles.textGroup2}>
            Making sandcastles is a fun and classic beach activity that allows
            children to explore their creativity while enjoying the outdoors. It
            helps develop fine motor skills. spatial awareness, and planning
            abilities.
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Preparation Time
            </Text>
          </View>
          <Text style={styles.textGroup1}>Low</Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Duration of Activity
            </Text>
          </View>
          <Text style={styles.textGroup1}>Varies</Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Materials Needed
            </Text>
          </View>
          <Text style={styles.textGroup2}>
            1. Sand (at a beach or in a sandbox)
          </Text>
          <Text style={styles.textGroup2}>2. Buckets, shovels</Text>
          <Text style={styles.textGroup2}>3. Molds</Text>
          <Text style={styles.textGroup2}>
            4. Natural decorations (shells, rocks, seaweed, etc.)
          </Text>
          <Text
            style={{
              fontSize: 14,
              padding: 5,
              paddingBottom: 10,
              paddingLeft: 27,
              color: "grey",
            }}
          >
            5. camera or smartphone for taking pictures
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Skills Developed
            </Text>
          </View>
          <Text style={styles.textGroup1}>
            Creativity, Fine Motor Skills, Planning and Building Skills
          </Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Safety Level
            </Text>
          </View>
          <Text style={styles.textGroup1}>Supervised</Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Learning Areas
            </Text>
          </View>
          <Text style={styles.textGroup1}>Arts, Physical Education</Text>
        </View>
        <View>
          <View style={styles.viewGroup1}>
            <Entypo name="dot-single" size={24} color="black" />
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Weather Suitability
            </Text>
          </View>
          <Text style={styles.textGroup1}>Suitable for Sunny/Good Weather</Text>
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
            navigation.navigate("ActivityStep", {
              activity: activity,
            })
          }
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Select and Start
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ActivityInformation;
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

  viewGroup1: {
    display: "flex",
    flexDirection: "row",
    padding: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 10,
  },

  textGroup1: {
    fontSize: 14,
    padding: 5,
    paddingLeft: 27,
    paddingBottom: 10,
    color: "grey",
  },

  textGroup2: { fontSize: 14, padding: 5, paddingLeft: 27, color: "grey" },
});
