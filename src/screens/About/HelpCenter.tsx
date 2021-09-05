import React from "react";
import { View, Text } from "react-native";
import { List, Title, Caption } from "react-native-paper";
import colors from "../../utils/colors";

const HelpCenter = () => {
  return (
    <View style={{ margin: 20, flex: 1 }}>
      <Title>Question</Title>
      <Caption>Frequently Asked</Caption>
      <View>
        <List.Accordion
          title="What is Quizz?"
          titleStyle={{ color: colors.blue, fontWeight: "bold" }}
        >
          <List.Item title="Lorem" titleStyle={{ fontSize: 15 }} />
        </List.Accordion>
        <List.Accordion
          title="How to start quiz?"
          titleStyle={{ color: colors.blue, fontWeight: "bold" }}
        >
          <List.Item title="Lorem" titleStyle={{ fontSize: 15 }} />
        </List.Accordion>
        <List.Accordion
          title="How to get award?"
          titleStyle={{ color: colors.blue, fontWeight: "bold" }}
        >
          <List.Item title="Lorem" titleStyle={{ fontSize: 15 }} />
        </List.Accordion>
      </View>
      <View style={{ position: "absolute", bottom: 0 }}>
        <Caption>
          Can't find an answer to your question? Feel free to check our complete
          FAQ page, or contact us at ridhofauzi1@gmail.com
        </Caption>
      </View>
    </View>
  );
};

export default HelpCenter;
