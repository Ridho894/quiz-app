import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { Title, Switch, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
const widthScreen = Dimensions.get("window").width;

const Search = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          backgroundColor: "#dbdbdb",
          margin: 10,
          borderRadius: 10,
        }}
      >
        <Ionicons name="search-sharp" size={25} color="gray" />
        <TextInput
          placeholder="Search..."
          style={{ height: 50, fontSize: 20 }}
        />
      </View>
    </View>
  );
};

export default Search;
