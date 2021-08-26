import React from "react";
import { View, Text } from "react-native";
import { Agenda } from "react-native-calendars";

function QuizCalendar() {
  return (
    <View>
      <Agenda
        showClosingKnob
        renderEmptyDate={(day: any) => {
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
                Belum ada Jadwal
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default QuizCalendar;
