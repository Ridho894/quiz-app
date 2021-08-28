import React, { Fragment } from "react";
import { View, Text, ImageBackground } from "react-native";

const backgroundImage = require("../../assets/SplashScreen.png");

const Welcome = ({ navigation }: any) => {
  return (
    // <ImageBackground source={backgroundImage}>
      <View>
        <Text>Welcome</Text>
      </View>
    // </ImageBackground>
  );
};

export default Welcome;
