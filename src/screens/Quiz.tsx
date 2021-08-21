import React, { useState, useRef } from "react";
import { View, Text } from "react-native";
import { Difficulty, getQuizQuestions } from "../utils/utils";

function Quiz() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const setAnswers = useRef(null);

  const startQuiz = () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = getQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>QUIZ</Text>
    </View>
  );
}

export default Quiz;
