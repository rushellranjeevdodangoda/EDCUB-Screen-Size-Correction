import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import all avatar images
import avatar1 from "../LoginScreen/Avatar_Button_1.png";
import avatar2 from "../LoginScreen/Avatar_Button_2.png";
import avatar3 from "../LoginScreen/Avatar_Button_3.png";
import avatar4 from "../LoginScreen/Avatar_Button_4.png";
import avatar5 from "../LoginScreen/Avatar_Button_5.png";
import avatar6 from "../LoginScreen/Avatar_Button_6.png";
import avatar7 from "../LoginScreen/Avatar_Button_7.png";
import avatar8 from "../LoginScreen/Avatar_Button_8.png";

// Component for Avatar Button
const AvatarButton = ({ onPress, imageSource, isSelected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.avatarButton,
        isSelected && styles.selectedAvatarButton,
      ]}
    >
      <Image source={imageSource} style={styles.avatarImage} />
    </TouchableOpacity>
  );
};

export default function Avatar() {
  const navigation = useNavigation();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  // Function to handle avatar selection
  const handleAvatarSelection = (avatarId) => {
    // Handle the selection logic here
    console.log("Selected avatar:", avatarId);
    setSelectedAvatar(avatarId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        {/* Back Button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={{ fontSize: 18 }}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Select an Avatar</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Let's personalize your edcub profile.
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Choose your preferred avatar.</Text>

        {/* Display selected avatar */}
        {selectedAvatar && (
          <View style={styles.selectedAvatarContainer}>
            <Image
              source={
                selectedAvatar === 1
                  ? avatar1
                  : selectedAvatar === 2
                  ? avatar2
                  : selectedAvatar === 3
                  ? avatar3
                  : selectedAvatar === 4
                  ? avatar4
                  : selectedAvatar === 5
                  ? avatar5
                  : selectedAvatar === 6
                  ? avatar6
                  : selectedAvatar === 7
                  ? avatar7
                  : avatar8
              }
              style={styles.selectedAvatarImage}
            />
          </View>
        )}

        {/* Avatar Buttons */}
        <View style={styles.avatarContainer}>
          {/* First Row */}
          <View style={styles.row}>
            <AvatarButton
              onPress={() => handleAvatarSelection(1)}
              imageSource={avatar1}
              isSelected={selectedAvatar === 1}
            />
            <AvatarButton
              onPress={() => handleAvatarSelection(2)}
              imageSource={avatar2}
              isSelected={selectedAvatar === 2}
            />
            <AvatarButton
              onPress={() => handleAvatarSelection(3)}
              imageSource={avatar3}
              isSelected={selectedAvatar === 3}
            />
            <AvatarButton
              onPress={() => handleAvatarSelection(4)}
              imageSource={avatar4}
              isSelected={selectedAvatar === 4}
            />
          </View>
          {/* Second Row */}
          <View style={styles.row}>
            <AvatarButton
              onPress={() => handleAvatarSelection(5)}
              imageSource={avatar5}
              isSelected={selectedAvatar === 5}
            />
            <AvatarButton
              onPress={() => handleAvatarSelection(6)}
              imageSource={avatar6}
              isSelected={selectedAvatar === 6}
            />
            <AvatarButton
              onPress={() => handleAvatarSelection(7)}
              imageSource={avatar7}
              isSelected={selectedAvatar === 7}
            />
            <AvatarButton
              onPress={() => handleAvatarSelection(8)}
              imageSource={avatar8}
              isSelected={selectedAvatar === 8}
            />
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Littleone")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 50,
    backgroundColor: "white",
  },
  backButton: { paddingBottom: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  selectedAvatarContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop:20,
  },
  selectedAvatarImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  avatarButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ccc", // Add background color here
    justifyContent: "center",
    alignItems: "center",
  },
  selectedAvatarButton: {
    backgroundColor: "#A3AEF3", // Change background color to blue when selected
  },
  avatarImage: {
    width: 72, // Adjust image size as needed
    height: 72, // Adjust image size as needed
    borderRadius: 30,
  },
  nextButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 20,
    backgroundColor: "#FF6E77",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
