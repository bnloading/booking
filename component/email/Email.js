import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as React from "react";

export default function Email() {
  return (
    <TouchableOpacity style={styles.button} onPress={() => console.log("Button pressed")}>
      <Text style={styles.buttonText}>Click me</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    padding: 12,
    margin: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
