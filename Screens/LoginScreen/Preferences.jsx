import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

export default function Preferences() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [preferredEnvironment, setPreferredEnvironment] = useState("Outdoor");
  const navigation = useNavigation();
  const handleDateChange = (event, date) => {
    if (date !== undefined) {
      setSelectedDate(date);
    }
    setShowDatePicker(false);
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
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
        <Text style={styles.title}>Preferences</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Let's personalize your edcub profile.
        </Text>
        <Text style={styles.subtitle}>
          We'll need some information about you.
        </Text>

        <Text style={{ fontWeight: "bold", paddingTop: 30 }}>
          Daily Reminder Time
        </Text>

        {/* Time Display Box */}
        <TouchableOpacity
          style={styles.timeDisplayBox}
          onPress={toggleDatePicker}
        >
          <Text style={styles.timeDisplayText}>
            {selectedDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </TouchableOpacity>

        {/* Date Picker */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={handleDateChange}
            />
          )}
        </View>

        <Text style={{ fontWeight: "bold", paddingTop: 30 }}>
          Select preferred Environment
        </Text>

        {/* Environment Buttons */}
        <View style={styles.environmentButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.environmentButton,
              {
                marginRight: 10,
                backgroundColor:
                  preferredEnvironment === "Outdoor" ? "transparent" : "white",
                borderColor:
                  preferredEnvironment === "Outdoor" ? "#FF6E77" : "#ccc",
              },
            ]}
            onPress={() => setPreferredEnvironment("Outdoor")}
          >
            <Text
              style={[
                styles.environmentButtonText,
                {
                  color:
                    preferredEnvironment === "Outdoor" ? "#FF6E77" : "#ccc",
                },
              ]}
            >
              Outdoor
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.environmentButton,
              {
                backgroundColor:
                  preferredEnvironment === "Indoor" ? "transparent" : "white",
                borderColor:
                  preferredEnvironment === "Indoor" ? "#FF6E77" : "#ccc",
              },
            ]}
            onPress={() => setPreferredEnvironment("Indoor")}
          >
            <Text
              style={[
                styles.environmentButtonText,
                {
                  color: preferredEnvironment === "Indoor" ? "#FF6E77" : "#ccc",
                },
              ]}
            >
              Indoor
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={{ fontWeight: "bold", paddingTop: 30 }}>
          Select preferred Activities
        </Text>

        {/* Activity Buttons */}
        {preferredEnvironment === "Outdoor" ? (
          <View style={styles.activityButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Outdoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Nature</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Outdoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Music</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Outdoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Craft</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Outdoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Culinary</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Outdoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Storytelling</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.activityButtonsContainer}>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Indoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Activity1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Indoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Activity2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Indoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Activity3</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Indoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Activity4</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.activityButton,
                {
                  backgroundColor:
                    preferredEnvironment === "Indoor"
                      ? "#FF6E77"
                      : "transparent",
                },
              ]}
            >
              <Text style={styles.activityButtonText}>Activity5</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Next Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("TabNavigation")}
          style={[styles.nextButton, { marginTop: 20 }]}
        >
          <Text style={styles.nextButtonText}>Finish</Text>
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  activityButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  timeDisplayBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  timeDisplayText: {
    fontSize: 16,
  },
  environmentButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  environmentButton: {
    height: 45,
    flex: 1,
    borderWidth: 1,
    borderRadius: 22.5,
    alignItems: "center",
    justifyContent: "center",
  },
  environmentButtonText: {
    fontSize: 16,
    textAlignVertical: "center",
  },
  activityButtonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },

  activityButton: {
    backgroundColor: "#FF6E77",
    width: 100,
    height: 100,
    borderRadius: 50,
    paddingVertical: 10,

    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  nextButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#FF6E77",
    alignItems: "center",
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
