import React, { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Profile from "../screens/Profile/Profile";
import Setting from "../screens/Setting";
import Quiz from "../screens/Quiz/Quiz";
import QuizStarted from "../screens/Quiz/QuizStarted";
import DetailProfile from "../screens/Profile/DetailProfile";
import QuizCalendar from "../screens/Quiz/QuizCalendar";
import Welcome from "../screens/welcome/Welcome";
import Login from "../screens/Login";
import { FontAwesome5 } from "@expo/vector-icons";
import colors from "../utils/colors";
import HelpCenter from "../screens/About/HelpCenter";
import PrivacyPolicy from "../screens/About/PrivacyPolicy";
import Requirement from "../screens/About/Requirement";

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

export const QuizStack = ({ navigation, route }: any) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "QuizStarted") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName={"Quiz"}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.blue },
      }}
    >
      <Stack.Screen
        name={"Quiz"}
        component={Quiz}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
              <FontAwesome5 name="calendar-day" size={20} color={"white"} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={"QuizStarted"}
        component={QuizStarted}
        options={{ statusBarHidden: true }}
      />
      <Stack.Screen
        name={"Calendar"}
        component={QuizCalendar}
        options={{ headerTitle: "Calendar" }}
      />
    </Stack.Navigator>
  );
};

export const ProfileStack = ({ navigation, route }: any) => {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "DetailProfile") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else if (routeName === "HelpCenter") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else if (routeName === "PrivacyPolicy") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else if (routeName === "Requirement") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator
      initialRouteName={"Profile"}
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: { backgroundColor: colors.blue },
      }}
    >
      <Stack.Screen name={"Profile"} component={Profile} />
      <Stack.Screen name={"DetailProfile"} component={DetailProfile} />
      <Stack.Screen name={"HelpCenter"} component={HelpCenter} />
      <Stack.Screen name={"PrivacyPolicy"} component={PrivacyPolicy} />
      <Stack.Screen name={"Requirement"} component={Requirement} />
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
