import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Title, Switch, useTheme } from "react-native-paper";

const Setting = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme(!setIsDarkTheme);
  };
  const paperTheme = useTheme();
  return (
    <View style={{ margin: 10 }}>
      <Title>Theme</Title>
      <TouchableOpacity
        onPress={() => {
          toggleTheme();
        }}
      >
        <Switch style={{ alignSelf: "flex-start" }} value={paperTheme.dark} />
      </TouchableOpacity>
    </View>
  );
};

export default Setting;
