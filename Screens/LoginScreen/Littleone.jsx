import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Littleone() {
  const navigation = useNavigation();
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
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
        <Text style={styles.title}>Your Little One</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Let's personalize your edcub profile. We'll need some information about your Little One.
        </Text>

        {/* Child Nickname Label */}
        <Text style={styles.label}>Child Nickname*</Text>

        {/* Child Nickname Text Input */}
        <TextInput style={styles.input} placeholder="Ciri" />

        {/* Child First Name Label */}
        <Text style={styles.label}>Child First Name</Text>

        {/* Child First Name Text Input */}
        <TextInput style={styles.input} placeholder="Cirilla" />

        {/* Child Last Name Label */}
        <Text style={styles.label}>Child Last Name</Text>

        {/* Child Last Name Text Input */}
        <TextInput style={styles.input} placeholder="Chalotra" />

        {/* Date of Birth Label */}
        <Text style={styles.label}>Date of Birth</Text>

        {/* Show Date Picker Button */}
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.datePickerButton}
        >
          <Text>{dateOfBirth.toDateString()}</Text>
        </TouchableOpacity>

        {/* Date Picker */}
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("Preferences")}
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
  label: {
    fontSize: 16,
    marginBottom: 3,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20, // Add spacing between inputs
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20,
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
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
