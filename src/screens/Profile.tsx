import React from "react";
import { View, Text, Image } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import colors from "../utils/colors";
const Profile = () => {
  return (
    <View>
      <View
        style={{
          margin: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar.Text
          size={50}
          label="MR"
          style={{ backgroundColor: colors.blue, marginRight: 10 }}
        />
        <View>
          <Title>Muhamad Ridho</Title>
          <Caption>+62 88806446929</Caption>
        </View>
      </View>
    </View>
  );
};

export default Profile;
