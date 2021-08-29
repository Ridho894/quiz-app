import React from "react";
import BarNavigation from "./BarNavigation";
import { NavigationContainer } from "@react-navigation/native";
import colors from "../utils/colors";
import { StatusBar } from "react-native";
const Root = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.darkBlue} />
      <BarNavigation />
    </NavigationContainer>
  );
};

export default Root;
