import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={{ padding: screenWidth * 0.05 }}>
          {/* Back Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={{ fontSize: 18 }}>Back</Text>
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>Create Account</Text>

          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Embark on a journey of joyful learning and shared moments!
          </Text>

          {/* Parent Name Label */}
          <Text style={styles.label}>Parent name</Text>

          {/* Parent Name Text Input */}
          <TextInput style={styles.input} placeholder="Anya Chalotra" />

          {/* Email Label */}
          <Text style={styles.label}>Email</Text>

          {/* Email Text Input */}
          <TextInput
            style={styles.input}
            placeholder="anyachalotra95@gmail.com"
            keyboardType="email-address"
          />

          {/* Phone Label */}
          <Text style={styles.label}>Phone</Text>

          {/* Phone Text Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
          />

          {/* Password Label */}
          <Text style={styles.label}>Password</Text>

          {/* Password Text Input */}
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
          />

          {/* Agreement Text */}
          <Text style={styles.agreementText}>
            By Creating Account you agree to the{" "}
            <Text style={[styles.linkText, { color: "#FF6E77" }]}>
              Terms of service
            </Text>{" "}
            and{" "}
            <Text style={[styles.linkText, { color: "#FF6E77" }]}>
              Privacy policy
            </Text>
          </Text>

          {/* Next Button */}
          <TouchableOpacity
            style={[styles.nextButton, { width: "100%" }]}
            onPress={() => navigation.navigate("Avatar")}
          >
            <Text style={styles.nextButtonText}>Next</Text>
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
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-around",
    flexBasis: "auto",
    flexDirection: "column",
  },
  backButton: { paddingBottom: 20, paddingTop:20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginBottom: 10,
    width: "100%", // Take full width of the container
  },
  agreementText: {
    fontSize: 14,
    marginTop: 20,
  },
  linkText: {
    color: "#FF6E77",
    fontWeight: "bold",
  },
  nextButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
    backgroundColor: "#FF6E77",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
  },
  loginLinkText: {
    fontSize: 16,
  },
});
