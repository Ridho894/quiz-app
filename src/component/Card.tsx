import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../utils/colors";
const Card = {
  Quiz: () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              alignSelf: "flex-start",
              alignItems: "center",
              backgroundColor: "white",
              padding: 20,
              height: 200,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <FontAwesome
              name="book"
              size={30}
              color="white"
              style={{
                backgroundColor: colors.blue,
                padding: 10,
                borderRadius: 50,
              }}
            />
            <Text>Ini adalah card quiz</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  },
  Category: () => {
    return (
      <View>
        <Text>Ini adalah card category</Text>
      </View>
    );
  },
};

export default Card;
