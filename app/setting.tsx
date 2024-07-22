import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Setting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.goBack()}>
        Setting
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});

export default Setting;
