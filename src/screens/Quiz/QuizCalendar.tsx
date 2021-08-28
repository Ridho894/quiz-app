import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { Agenda, Calendar, CalendarList } from "react-native-calendars";
import { Badge, Caption, Subheading, Title } from "react-native-paper";
import colors from "../../utils/colors";

function QuizCalendar({ navigation }: any) {
  return (
    <ScrollView>
      <View>
        <Calendar
          current={"2021-08-27"}
          markedDates={{
            "2021-08-27": {
              selected: true,
              marked: true,
              selectedColor: colors.blue,
            },
            "2021-08-30": { marked: true },
            "2021-08-28": { marked: true, dotColor: "red", activeOpacity: 0 },
          }}
        />
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <View style={{ alignSelf: "flex-start", margin: 10 }}>
            <View
              style={{
                alignSelf: "center",
                display: "flex",
              }}
            >
              <Subheading>Fri</Subheading>
              <Badge
                style={{
                  alignSelf: "center",
                  backgroundColor: colors.blue,
                }}
                size={30}
              >
                27
              </Badge>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("QuizCalendar")}>
            <View
              style={{
                marginTop: 10,
                borderRadius: 10,
                height: 200,
                maxHeight: 200,
                width: Dimensions.get("window").width - 70,
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
                <Title>Programming Course</Title>
                <Caption>
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit
                  Provident suscipit sit aperiam reprehenderit laboriosam iste
                  rerum, culpa aliquid laborum exercitationem voluptatibus ullam
                  deleniti aut maxime quam expedita enim dicta perferendis.",
                </Caption>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default QuizCalendar;
