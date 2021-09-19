import React from "react";
import { View, Text } from "react-native";
import colors from "../../utils/colors";
import layouts from "../../utils/layouts";

function QuizRecords() {
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
        <Text>Your Score is 90</Text>
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
          padding: 10,
        }}
      >
        <Text>Records</Text>
      </View>
      {/* </View> */}
    </View>
  );
}

export default QuizRecords;
