import React from "react";
import { View, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import colors from "../../utils/colors";
import { Subheading, Caption, Title, Badge } from "react-native-paper";

const dimensions = {
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
};

const Quiz = () => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", paddingBottom: 20 }}>
        <View style={{ alignSelf: "flex-start", margin: 10 }}>
          <View
            style={{
              alignSelf: "center",
              display: "flex",
            }}
          >
            <Subheading>JUM</Subheading>
            <Badge
              style={{
                alignSelf: "center",
                backgroundColor: colors.blue,
              }}
              size={30}
            >
              22
            </Badge>
          </View>
        </View>
        <TouchableOpacity>
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
              <Title>Quiz Dasar Pemrograman</Title>
              <Caption>sas</Caption>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Quiz;
