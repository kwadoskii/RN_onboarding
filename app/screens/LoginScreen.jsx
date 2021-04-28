import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../components/Screen";

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Text>Welcome to the Login screen</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
