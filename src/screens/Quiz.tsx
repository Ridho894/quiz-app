import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import {
  Difficulty,
  getQuizQuestions,
  Question,
  QuestionState,
} from "../utils/utils";
import { Icon } from "react-native-elements";
import Button from "../component/Button";

function Quiz() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const [number, setNumber] = useState(0);
  const setAnswers = useRef(null);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await getQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    console.log(newQuestions);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
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
          <Text style={{ color: "#006996", fontSize: 16, marginRight: 10 }}>
            1
          </Text>
          <Text style={{ color: "#000", fontSize: 16, textAlign: "left" }}>
            From which country did the song &quot;Gangnam Style&quot; originate
            from?
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingTop: 14,
            paddingHorizontal: 24.5,
            marginTop: 30,
          }}
        >
          <Button label="Answer" />
          <Button label="Answer" />
          <Button label="Answer" />
          <Button label="Answer" />
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
        <TouchableWithoutFeedback onPress={() => startQuiz()}>
          <Icon type="entypo" name="plus" color="white" size={10} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default Quiz;
