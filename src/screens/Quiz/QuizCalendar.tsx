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
import moment from "moment";

function QuizCalendar({ navigation }: any) {
  // const formatTime = ({time}:any) => {
  //   return moment(time).format('HH.mm')
  //
  console.log(moment().get("date"));
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        {/* <Calendar
          current={moment().get("date")}
          enableSwipeMonths={true}
          markedDates={{
            "2021-08-27": {
              selected: true,
              marked: true,
              selectedColor: colors.blue,
            },
            "2021-08-30": { marked: true },
            "2021-08-28": { marked: true, dotColor: "red", activeOpacity: 0 },
          }}
        /> */}
        <Agenda
          // items={{
          //   "2012-05-22": [{ name: "item 1 - any js object" }],
          //   "2012-05-23": [{ name: "item 2 - any js object", height: 80 }],
          //   "2012-05-24": [],
          //   "2012-05-25": [
          //     { name: "item 3 - any js object" },
          //     { name: "any js object" },
          //   ],
          // }}
          renderEmptyData={(day: any) => {
            return (
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    padding: 10,
                    color: "grey",
                  }}
                >
                  No Schedule
                </Text>
              </View>
            );
          }}
          renderItem={(item) => {
            return (
              <View>
                <Text>Schedule here...</Text>
              </View>
            );
          }}
        />
        {/* <View style={{ flexDirection: "row", paddingBottom: 20 }}>
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
        </View> */}
      </View>
    </ScrollView>
  );
}

export default QuizCalendar;
