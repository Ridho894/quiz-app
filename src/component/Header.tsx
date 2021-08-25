import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const widthScreen = Dimensions.get("window").width;

const Header = ({ props }: any) => {
  const { insets, previous, navigation } = props;
  return (
    <View>
      {previous && (
        <View>
          <Ionicons
            name={"arrow-back-sharp"}
            size={30}
            color={"white"}
            onPress={() => navigation.goBack()}
          />
        </View>
      )}
      <View>
          <Text></Text>
      </View>
    </View>
  );
};
