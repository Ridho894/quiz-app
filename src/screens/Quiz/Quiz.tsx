import React from "react";
import { View, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import { Subheading, Caption, Title, Badge } from "react-native-paper";

const dimensions = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const data = [
  {
    id: "1",
    title: "English Course",
    date: "24",
    day: "Sunday",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Provident suscipit sit aperiam reprehenderit laboriosam iste rerum, culpa aliquid laborum exercitationem voluptatibus ullam deleniti aut maxime quam expedita enim dicta perferendis.",
  },
  {
    id: "2",
    title: "Programming Course",
    date: "24",
    day: "Thursday",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Provident suscipit sit aperiam reprehenderit laboriosam iste rerum, culpa aliquid laborum exercitationem voluptatibus ullam deleniti aut maxime quam expedita enim dicta perferendis.",
  },
  {
    id: "3",
    title: "Science Course",
    date: "24",
    day: "Saturday",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Provident suscipit sit aperiam reprehenderit laboriosam iste rerum, culpa aliquid laborum exercitationem voluptatibus ullam deleniti aut maxime quam expedita enim dicta perferendis.",
  },
];

const Quiz = ({ navigation }: any) => {
  return (
    <ScrollView>
      {data.map((item) => (
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <View style={{ alignSelf: "flex-start", margin: 10 }}>
            <View
              style={{
                alignSelf: "center",
                display: "flex",
              }}
            >
              <Subheading>Sun</Subheading>
              <Badge
                style={{
                  alignSelf: "center",
                  backgroundColor: colors.blue,
                }}
                size={30}
              >
                {item.date}
              </Badge>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("QuizStarted")}>
            <View
              style={{
                marginTop: 10,
                borderRadius: 10,
                height: 200,
                maxHeight: 200,
                width: dimensions.width - 70,
                shadowColor: "#000",
                shadowOffset: {
                  width: 20,
                  height: 20,
                },
                shadowOpacity: 1,
                shadowRadius: 1,
                elevation: 2,
              }}
            >
              <View style={{ margin: 10 }}>
                <Title>{item.title}</Title>
                <Caption>{item.description}</Caption>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default Quiz;
