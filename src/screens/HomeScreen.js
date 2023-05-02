import { View, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  bgImage: {
    flex: 1,
  },
});

export default HomeScreen;
