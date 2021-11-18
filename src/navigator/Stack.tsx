import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Route } from "./Routes";

type RootStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default Stack;
