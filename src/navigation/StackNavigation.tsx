import React, { useRef, useState } from "react";
import {
  View,
  StatusBar,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-elements";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import Home from "../screens/Home";
import colors from "../utils/colors";
import Profile from "../screens/Profile/Profile";
import Setting from "../screens/Setting";
import Quiz from "../screens/Quiz/Quiz";
import QuizStarted from "../screens/Quiz/QuizStarted";
import DetailProfile from "../screens/Profile/DetailProfile";
import QuizCalendar from "../screens/Quiz/QuizCalendar";
import Welcome from "../screens/welcome/Welcome";
import Login from "../screens/Login";
import Introducing from "../screens/welcome/Introducing1";

const Stack = createNativeStackNavigator();

export const WelcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Welcome"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen name={"Welcome"} component={Welcome} />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Home"} component={Home} />
    </Stack.Navigator>
  );
};

export const QuizStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Quiz"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Quiz"} component={Quiz} />
      <Stack.Screen name={"QuizStarted"} component={QuizStarted} />
      <Stack.Screen name={"QuizCalendar"} component={QuizCalendar} />
    </Stack.Navigator>
  );
};

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Profile"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Profile"} component={Profile} />
      <Stack.Screen name={"DetailProfile"} component={DetailProfile} />
    </Stack.Navigator>
  );
};

export const SettingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Setting"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Setting"} component={Setting} />
    </Stack.Navigator>
  );
};
