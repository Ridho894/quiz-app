import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, Icon } from "react-native-elements";
import Quiz from "../screens/Quiz";
import Home from "../screens/Home";
import colors from "../utils/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
          }}
        />
        <Stack.Screen
          name="QUIZ"
          component={Quiz}
          options={{
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: { backgroundColor: colors.blue },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Dashboard = (props: any) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Home'}/>
    </Tab.Navigator>
  );
};

export default Root;
