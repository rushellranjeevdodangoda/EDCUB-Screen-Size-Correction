import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* EDCUB logo */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../LoginScreen/EDCUB_logo.png")}
          style={styles.logo}
        />
      </View>

      {/* Image Below Logo */}
      <View style={styles.imageBelowLogoContainer}>
        <Image
          source={require("../LoginScreen/Starting.png")} // Provide the path to your image
          style={styles.imageBelowLogo}
          resizeMode="contain" // Ensure the image fits its container
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Create</Text>

      {/* Subtitle */}
      <Text style={[styles.subtitle, { textAlign: "center" }]}>
        Make every moment with your kid an enjoyable activity by joining edcub
      </Text>

      {/* Create Account Button */}
      <TouchableOpacity
  style={styles.nextButton}
  onPress={() => navigation.navigate("SignUp")}
>
  <Text style={styles.nextButtonText}>Create Account</Text>
</TouchableOpacity>


      {/* Already have an account */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={[
              styles.loginLinkText,
              { color: "#FF6E77", fontWeight: "bold" },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  logo: {
    width: 80, // Adjust width as needed
    height: 80, // Adjust height as needed
    marginBottom:20,
  },
  imageBelowLogoContainer: {
    alignItems: "center",
    marginBottom: 20, // Adjusted marginBottom for spacing
  },
  imageBelowLogo: {
    width: "100%", // Adjust width to fit the container
    height: 350, // Adjust height as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center", // Center the text
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
    marginHorizontal: 20,
  },
  nextButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20, // Adjusted marginTop to increase the gap between the agreement text and the button
    backgroundColor: "#FF6E77",
    alignItems: "center",
    marginHorizontal: 20,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20, // Add spacing between the "Next" button and the login text
  },
  loginText: {
    fontSize: 16,
  },
  loginLinkText: {
    fontSize: 16,
  },
});
