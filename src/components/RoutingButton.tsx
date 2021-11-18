import React from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { NavigationProp } from "react-navigation";

import { useNavigation } from "@react-navigation/native";

const styles: StyleSheet = StyleSheet.create({
  routingButtonView: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
    borderRadius: 5
  },
  routingButtonText: {
    color: "white"
  }
});

interface IRoutingButtonProps {
  route: string;
  content: string;
}

const RoutingButton: React.FC<IRoutingButtonProps> = (
  props: IRoutingButtonProps
) => {
  const navigation: NavigationProp = useNavigation();

  return (
    <TouchableOpacity onPress={(): void => navigation.navigate(props.route)}>
      <View style={styles.routingButtonView}>
        <Text style={styles.routingButtonText}>{props.content}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RoutingButton;
