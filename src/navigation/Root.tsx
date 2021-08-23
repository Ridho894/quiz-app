import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Quiz from "../screens/Quiz";
import Home from "../screens/Home";
import colors from "../utils/colors";

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
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="home"
                size={30}
                color={colors.blue}
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
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="book"
                size={30}
                color={colors.blue}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// function Dashboard(props: any) {
//   return <NavigationContainer></NavigationContainer>;
// }

export default Root;
function props(
  arg0: JSX.Element
):
  | ((props: {
      focused: boolean;
      color: string;
      size: number;
    }) => React.ReactNode)
  | undefined {
  throw new Error("Function not implemented.");
}
