import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";

const Home = (navigation: any) => {
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate()} />
    </View>
  );
};

export default Home;
