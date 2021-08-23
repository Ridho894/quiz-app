import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-elements";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import Quiz from "../screens/Quiz";
import Home from "../screens/Home";
import colors from "../utils/colors";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import { View, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name={"HOME"}
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
            tabBarActiveTintColor: colors.blue,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home"
                size={20}
                color={focused ? colors.blue : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"QUIZ"}
          component={Quiz}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
            tabBarActiveTintColor: colors.blue,
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="tasks"
                size={20}
                color={focused ? colors.blue : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"SETTING"}
          component={Setting}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
            tabBarActiveTintColor: colors.blue,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="settings"
                size={20}
                color={focused ? colors.blue : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"PROFILE"}
          component={Profile}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
            tabBarActiveTintColor: colors.blue,
            tabBarIcon: ({ focused }) => (
              <FontAwesome
                name="user"
                size={20}
                color={focused ? colors.blue : "grey"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Root;
