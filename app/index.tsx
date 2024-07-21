import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RooyLayout = () => {
  return (
    <View style={styles.container}>
      <Text> RooyLayout</Text>
    </View>
  );
};

export default RooyLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
