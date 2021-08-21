import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import {
  Difficulty,
  getQuizQuestions,
  Question,
  QuestionState,
} from "../utils/utils";
import { Icon } from "react-native-elements";
function Quiz() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const setAnswers = useRef(null);

  const startQuiz = () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = getQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    console.log(newQuestions);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 0,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>Questions</Text>
          <Text
            style={{
              fontSize: 16,
              color: "#006996",
            }}
          >
            1/10
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 33,
            paddingRight: 10,
          }}
        >
          <Text style={{ color: "#006996", fontSize: 16 }}>1</Text>
        </View>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "#006996",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 50,
          height: 50,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <Icon type="entypo" name="plus" color="white" size={10} />
      </View>
    </View>
  );
}

export default Quiz;
