import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../utils/colors";
import { Button } from "react-native-elements";

const { height, width } = Dimensions.get("window");

const Login = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: "#f0f0f0", height: height }}>
      <Image
        source={require("../assets/Logo.png")}
        style={{
          height: height / 3,
          width: width / 1.5,
          alignSelf: "center",
          marginTop: 30,
        }}
      />
      <View style={{ marginTop: 30 }}>
        <TextInput
          dense={true}
          label="Username"
          placeholder="Masukkan Username"
          mode="outlined"
          theme={{ colors: { primary: colors.blue } }}
          style={{ width: width / 1.1, alignSelf: "center" }}
        />
        <Button
          title="GET STARTED"
          buttonStyle={{
            backgroundColor: colors.darkBlue,
            width: width / 2,
            alignSelf: "center",
            marginTop: 30,
          }}
          onPress={() => navigation.navigate("BarNavigation")}
        />
      </View>
    </View>
  );
};

export default Login;
