import React, { useState } from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../utils/colors";
import { Button } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

const Login = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ScrollView>
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
            label="Email"
            placeholder="Masukkan Email"
            mode="outlined"
            theme={{ colors: { primary: colors.blue } }}
            style={{ width: width / 1.1, alignSelf: "center" }}
          />
          <TextInput
            dense={true}
            label="Password"
            secureTextEntry={!showPassword}
            placeholder="Masukkan Password"
            mode="outlined"
            right={
              <Ionicons
                name={showPassword ? "eye-off-sharp" : "eye"}
                size={24}
                color="blue"
                onPress={() => setShowPassword((prev) => !prev)}
              />
            }
            theme={{ colors: { primary: colors.blue } }}
            style={{ width: width / 1.1, alignSelf: "center", marginTop: 30 }}
          />
          <Button
            title="LOGIN"
            buttonStyle={{
              backgroundColor: colors.darkBlue,
              width: width / 1.1,
              alignSelf: "center",
              marginTop: 30,
            }}
            onPress={() => navigation.navigate("BarNavigation")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
