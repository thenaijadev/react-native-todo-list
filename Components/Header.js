import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
});

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>TodoList</Text>
    </View>
  );
}

export default Header;
