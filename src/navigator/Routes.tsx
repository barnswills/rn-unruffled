import React from "react";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import FormScreen from "../screens/FormScreen";

export interface Route {
  name: string;
  component: React.FC<any>;
}

const routes: Route[] = [
  {
    name: "Home",
    component: HomeScreen
  },
  {
    name: "About",
    component: AboutScreen
  },
  {
    name: "Form",
    component: FormScreen
  }
];

export default routes;
