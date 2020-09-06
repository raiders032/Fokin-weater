import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>getting weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 100,
    paddingVertical: 100,
    backgroundColor: "#FDF6AA",
  },
  text: {
    fontSize: 20,
  },
});
