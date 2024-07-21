import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, useColorScheme, View, StyleSheet } from "react-native";

export const unstable_settings = {
  initialRouteName: "index",
};

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return null;
}

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

{
  /* <Stack.Navigator>
<Stack.Screen name="index" component={HomeScreen} options={{}} />
</Stack.Navigator> */
}
