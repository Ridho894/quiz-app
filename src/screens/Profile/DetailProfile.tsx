import React from "react";
import { View, ScrollView, Dimensions, StyleSheet } from "react-native";
import { Avatar, Title, Caption, List, TextInput } from "react-native-paper";
import colors from "../../utils/colors";

const widthScreen = Dimensions.get("window").width;

const DetailProfile = () => {
  return (
    <ScrollView>
      <View>
        <Avatar.Text
          label="MR"
          size={65}
          style={{
            backgroundColor: colors.blue,
            alignSelf: "center",
            marginTop: 20,
          }}
        />
        <TextInput
          mode="outlined"
          dense={true}
          style={styles.textInput}
          label="Name"
        //   disabled={true}
          outlineColor={colors.blue}
          theme={{ colors: { primary: colors.blue } }}
        />
        <TextInput
          mode="outlined"
          dense={true}
          style={styles.textInput}
          label="Email"
          outlineColor={colors.blue}
          theme={{ colors: { primary: colors.blue } }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: widthScreen - 20,
    alignSelf: "center",
    marginTop: 10,
  },
});

export default DetailProfile;
