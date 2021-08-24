import React from "react";
import { View, Text } from "react-native";
interface QuestionProps {
  questionNr: number;
  question: string;
}
const Question = ({ question, questionNr }: QuestionProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 0,
        paddingRight: 10,
      }}
    >
      <Text style={{ color: "#006996", fontSize: 16, marginRight: 10 }}>
        {questionNr}
      </Text>
      <Text style={{ color: "#000", fontSize: 16, textAlign: "left" }}>
        {question}
      </Text>
    </View>
  );
};
export default Question;
