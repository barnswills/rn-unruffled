import React from "react";

import { View } from "react-native";
import RoutingButton from "../components/RoutingButton";

const AboutScreen: React.FC = () => {
  return (
    <View>
      <RoutingButton route="Form" content="Go To Form" />
    </View>
  );
};

export default AboutScreen;
