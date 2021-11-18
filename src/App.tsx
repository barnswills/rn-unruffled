import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Stack from "./navigator/Stack";
import routes from "./navigator/Routes";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {routes.map((route: any) => (
          <Stack.Screen name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
