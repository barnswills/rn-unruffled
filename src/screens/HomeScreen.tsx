import React from "react";

import { View, Text, StyleSheet } from "react-native";

import RoutingButton from "../components/RoutingButton";

const styles: StyleSheet = StyleSheet.create({
  homeScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export interface IHomeScreenProps {}

const HomeScreen: React.FC<IHomeScreenProps> = (props: IHomeScreenProps) => {
  return (
    <View style={styles.homeScreen}>
      <Text>HomePage</Text>
      <RoutingButton route="About" content="Go To About page" />
    </View>
  );
};

export default HomeScreen;
