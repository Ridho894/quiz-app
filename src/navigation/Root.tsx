import React from "react";
import BarNavigation from "./BarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../utils/colors";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeStack } from "./StackNavigation";

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.darkBlue} />
      <Stack.Navigator>
        <Stack.Screen
          name={"WelcomeScreen"}
          component={WelcomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"BarNavigation"} component={BarNavigation} />
        {/* <BarNavigation /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
