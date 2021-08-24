import React, { useRef } from "react";
import { View, StatusBar, Animated, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
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
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";
import Quiz from "../screens/Quiz/Quiz";
import QuizStarted from "../screens/Quiz/QuizStarted";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={"Home"} component={Home} />
    </Stack.Navigator>
  );
};

const QuizStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Quiz"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"Quiz"} component={Quiz} />
      <Stack.Screen name={"QuizStarted"} component={QuizStarted} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return;
};

const Root = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 40;
    return width / 5;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.blue} />
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={"QUIZ"}
          component={QuizStack}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerRightContainerStyle: { right: 20 },
            headerRight: (props) => (
              <FontAwesome5 name="calendar-day" size={20} color={"white"} />
            ),
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.4,
                useNativeDriver: true,
              }).start();
            },
          })}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2.8,
                useNativeDriver: true,
              }).start();
            },
          })}
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
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4.2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
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
      ></Animated.View>
    </NavigationContainer>
  );
};

export default Root;
