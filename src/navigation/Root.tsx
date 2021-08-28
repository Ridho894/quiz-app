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

const WelcomeStack = createNativeStackNavigator();

const WelcomeStackNavigator = () => {
  return (
    <WelcomeStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <WelcomeStack.Screen name={"Welcome"} component={Welcome} />
    </WelcomeStack.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name={"Home"} component={Home} />
    </HomeStack.Navigator>
  );
};

const QuizStack = createNativeStackNavigator();

const QuizStackNavigator = () => {
  return (
    <QuizStack.Navigator
      initialRouteName="Quiz"
      screenOptions={{ headerShown: false }}
    >
      <QuizStack.Screen name={"Quiz"} component={Quiz} />
      <QuizStack.Screen name={"QuizStarted"} component={QuizStarted} />
      <QuizStack.Screen name={"QuizCalendar"} component={QuizCalendar} />
    </QuizStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen name={"Profile"} component={Profile} />
      <ProfileStack.Screen name={"DetailProfile"} component={DetailProfile} />
    </ProfileStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator();

const Root = ({ navigation }: any) => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  function getWidth() {
    let width = Dimensions.get("window").width;
    width = width - 40;
    return width / 5;
  }
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.darkBlue} />
        <MainTab.Navigator>
          <MainTab.Screen
            name={"HOME"}
            component={HomeStackNavigator}
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
            name={"QUIZ"}
            component={QuizStackNavigator}
            options={{
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerRightContainerStyle: { right: 20 },
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("QuizCalendar")}
                >
                  <FontAwesome5 name="calendar-day" size={20} color={"white"} />
                </TouchableOpacity>
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
          <MainTab.Screen
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
          <MainTab.Screen
            name={"PROFILE"}
            component={ProfileStackNavigator}
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
        </MainTab.Navigator>
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
    </PaperProvider>
  );
};

export default Root;
