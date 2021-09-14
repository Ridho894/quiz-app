import React, { useRef, useState } from "react";
import {
  View,
  StatusBar,
  Animated,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import colors from "../utils/colors";
import {
  HomeStack,
  ProfileStack,
  QuizStack,
  SearchStack,
} from "./StackNavigation";

const MainTab = createBottomTabNavigator();

const BarNavigation = ({ navigation }: any) => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 40;
    return width / 5;
  }
  return (
    // <NavigationContainer>
    <MainTab.Navigator>
      <MainTab.Screen
        name={"HOME"}
        component={HomeStack}
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
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
      />
      <MainTab.Screen
        name={"SEARCH"}
        component={SearchStack}
        options={{
          headerShown: false,
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: colors.blue },
          tabBarActiveTintColor: colors.blue,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="search-sharp"
              size={20}
              color={focused ? colors.blue : "grey"}
            />
          ),
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2.8,
              useNativeDriver: true,
            }).start();
          },
        })}
      />
      <MainTab.Screen
        name={"QUIZ"}
        component={QuizStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.blue,
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="tasks"
              size={20}
              color={focused ? colors.blue : "grey"}
            />
          ),
          // tabBarStyle: { display: "none" },
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1.4,
              useNativeDriver: true,
            }).start();
          },
        })}
      />

      <MainTab.Screen
        name={"PROFILE"}
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: colors.blue,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="user"
              size={20}
              color={focused ? colors.blue : "grey"}
            />
          ),
          // tabBarStyle: { display: "none" },
        }}
        listeners={({ navigation, route }) => ({
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4.2,
              useNativeDriver: true,
            }).start();
          },
        })}
      />
      {/* <Animated.View
        style={{
          width: getWidth(),
          height: 2,
          backgroundColor: colors.blue,
          position: "absolute",
          bottom: 49,
          left: 13,
          borderRadius: 50,
          transform: [
            {
              translateX: tabOffsetValue,
            },
          ],
        }}
      ></Animated.View> */}
    </MainTab.Navigator>
  );
};

export default BarNavigation;
