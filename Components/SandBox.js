import React from "react";
import { View, Text, StyleSheet } from "react-native";
function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

export default SandBox;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#ddd",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  boxOne: {
    backgroundColor: "violet",
    padding: 10,
    flex: 1,
  },
  boxTwo: {
    backgroundColor: "gold",
    padding: 40,
    flex: 1,
  },
  boxThree: {
    backgroundColor: "coral",
    padding: 10,
    flex: 1,
  },
  boxFour: {
    backgroundColor: "skyblue",
    padding: 10,
    flex: 1,
  },
});
