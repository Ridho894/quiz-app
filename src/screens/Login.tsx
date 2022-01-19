import React, { useState } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";
import colors from "../utils/colors";
import { Button } from "react-native-elements";
import layouts from "../utils/layouts";
import * as Yup from "yup";
import { Formik } from "formik";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
});

const Login = ({ navigation }: any) => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const handleLogin = () => {
    return navigation.navigate("BarNavigation")
  };
  return (
    <Formik
      initialValues={formData}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <View
          style={{ backgroundColor: "#f0f0f0", height: layouts.windowHeight }}
        >
          <Image
            source={require("../assets/Logo.png")}
            style={{
              height: layouts.windowHeight / 3,
              width: layouts.windowWidth / 1.5,
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
              theme={{ colors: { primary: colors.darkBlue } }}
              style={{ width: layouts.windowWidth / 1.1, alignSelf: "center" }}
              onChangeText={handleChange("username")}
              value={values.username}
            />
            {errors.username && touched.username && (
              <Text
                style={{
                  color: "red",
                  marginHorizontal: 20,
                  marginVertical: 10,
                }}
              >
                {errors.username}
              </Text>
            )}
            <Button
              title="MASUK"
              buttonStyle={{
                backgroundColor: colors.darkBlue,
                width: layouts.windowWidth / 1.1,
                alignSelf: "center",
                marginTop: 30,
              }}
              onPress={handleSubmit as any}
            />
          </View>
          <View
            style={{ margin: 20, position: "absolute", right: 0, bottom: 10 }}
          >
            <Text style={{ color: colors.darkBlue }}>Version 0.0.1</Text>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
