import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TagComponent = (props) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 10 }}>{props.tag}</Text>
    </View>
  );
};

export default TagComponent;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    borderRadius: 5,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    margin: 3,
  },
});
