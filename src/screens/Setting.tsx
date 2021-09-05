import React, { useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { SearchBar } from "react-native-elements";
import { Title, Switch, useTheme } from "react-native-paper";

const widthScreen = Dimensions.get("window").width;

const Setting = () => {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        showLoading={true}
        lightTheme={true}
        containerStyle={{
          padding: 0,
          width: widthScreen,
          alignSelf: "center",
          borderRadius: 0,
        }}
      />
    </View>
  );
};

export default Setting;
