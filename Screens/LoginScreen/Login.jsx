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

      {/* Title */}
      <Text style={styles.title}>Unlock the World of</Text>
      <Text style={styles.title2}>Playtime Wonders!</Text>

      {/* Subtitle */}
      <Text style={[styles.subtitle, { textAlign: "center" }]}>
        Sign in to EDCUB for interactive adventures that make every moment
        memorable. Let the fun commence!
      </Text>

      {/* Email Label */}
      <Text style={styles.label}>Email</Text>

      {/* Email Text Input */}
      <TextInput
        style={styles.input}
        placeholder="anyachalotra95@gmail.com"
        keyboardType="email-address"
      />

      {/* Password Label */}
      <Text style={styles.label}>Password</Text>

      {/* Password Text Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      {/* Forgot Password text */}
      <TouchableOpacity
        onPress={() => console.log("Forgot Password pressed")}
        style={styles.forgotPassword}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Image below the login button */}
      <View style={styles.imageBelowButtonContainer}>
        <Image
          source={require("../LoginScreen/or.png")}
          style={[styles.imageBelowButton, { width: windowWidth - 40 }]}
          resizeMode="contain"
        />
      </View>

      {/* Three Square Shaped Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.squareButton}>
          <Image
            source={require("../LoginScreen/button_image_1.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <Image
            source={require("../LoginScreen/button_image_2.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.squareButton}>
          <Image
            source={require("../LoginScreen/button_image_3.png")}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>

      {/* Already have an account */}
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={[
              styles.loginLinkText,
              { color: "#FF6E77", fontWeight: "bold" },
            ]}
          >
            Sign Up
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
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center", // Center the text
  },
  title2: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center", // Center the text
    color: "#FF6E77",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 40,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    paddingHorizontal: 35,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20, // Add spacing between inputs
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
  imageBelowButtonContainer: {
    alignItems: "center",
    marginBottom: 0, // Adjusted marginBottom to reduce vertical distance
  },
  imageBelowButton: {
    height: 40, // Adjusted height of the image
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 40,
  },
  squareButton: {
    width: 60, // Adjusted width
    height: 60, // Adjusted height
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 0, // No marginBottom
    marginHorizontal: 10, // Adjusted marginHorizontal to reduce horizontal distance between buttons
  },
  buttonImage: {
    width: 30, // Adjusted width of the image inside the button
    height: 30, // Adjusted height of the image inside the button
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
  forgotPassword: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    padding: 10,
    color: "#A3A3A3",
    fontSize: 14,
  },
});
