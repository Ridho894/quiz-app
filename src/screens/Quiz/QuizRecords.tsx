import React from "react";
import { View, Text, BackHandler } from "react-native";
import colors from "../../utils/colors";
import layouts from "../../utils/layouts";
import { Ionicons, Feather } from "@expo/vector-icons";

const menu = [
  {
    id: 1,
    name: "Play Again",
    icon: (
      <Ionicons
        name={"refresh"}
        size={30}
        color={"white"}
        style={{
          backgroundColor: colors.darkBlue,
          padding: 15,
          borderRadius: 30,
        }}
      />
    ),
  },
  {
    id: 2,
    name: "Home",
    icon: (
      <Feather
        name={"home"}
        size={30}
        color={"white"}
        style={{
          backgroundColor: colors.darkBlue,
          padding: 15,
          borderRadius: 30,
        }}
      />
    ),
  },
  {
    id: 3,
    name: "Share Score",
    icon: (
      <Ionicons
        name={"share"}
        size={30}
        color={"white"}
        style={{
          backgroundColor: colors.darkBlue,
          padding: 15,
          borderRadius: 30,
        }}
      />
    ),
  },
];

function QuizRecords({ route, navigation }: any) {
  // disable back button
  // BackHandler.addEventListener("hardwareBackPress", () => {
  //   return true;
  // });
  // function back button to home
  BackHandler.addEventListener("hardwareBackPress", () => {
    navigation.navigate("Home");
    return true;
  });

  const score = route.params.score;
  return (
    <View
      style={{ backgroundColor: colors.gray, height: layouts.windowHeight }}
    >
      <View
        style={{
          backgroundColor: colors.blue,
          height: layouts.windowHeight / 3,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            height: "100%",
            textAlignVertical: "center",
          }}
        >
          Your Score is {score}0
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
          width: layouts.windowWidth - 40,
          alignSelf: "center",
          padding: 20,
          paddingVertical: 30,
          position: "absolute",
          top: 200,
          borderRadius: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ left: 10 }}>
                <Text>100%</Text>
                <Text>Completion</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
                marginTop: 30,
              }}
            >
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ left: 10 }}>
                <Text>10</Text>
                <Text>Correct</Text>
              </View>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ left: 10 }}>
                <Text>100%</Text>
                <Text>Total Question</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
                marginTop: 30,
              }}
            >
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ left: 10 }}>
                <Text>10</Text>
                <Text>Wrong</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 120,
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        {menu.map((index:any) => (
          <View key={index.id} style={{ alignItems: "center" }}>
            {index.icon}
            <Text>{index.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default QuizRecords;
