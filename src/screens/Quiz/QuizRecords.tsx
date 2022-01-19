import React from "react";
import { View, Text, BackHandler } from "react-native";
import colors from "../../utils/colors";
import layouts from "../../utils/layouts";

function QuizRecords({ route }: any) {
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
          width: layouts.windowWidth - 10,
          alignSelf: "center",
          padding: 20,
          paddingVertical: 30,
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
              }}
            >
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ left: 10 }}>
                <Text>10</Text>
                <Text>Total Questions</Text>
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
                <Text>Completion</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-start",
              }}
            >
              <Text style={{ color: colors.yellow }}>⬤</Text>
              <View style={{ left: 10 }}>
                <Text>10</Text>
                <Text>Total Questions</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* </View> */}
    </View>
  );
}

export default QuizRecords;
