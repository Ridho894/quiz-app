import React from "react";
import { View, Dimensions, ScrollView } from "react-native";
import { Avatar, Title, Caption, List, Divider } from "react-native-paper";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../utils/colors";
import { Button } from "react-native-elements";

const heightScreen = Dimensions.get("window").height;

const Profile = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#ccc", height: heightScreen }}>
        <View
          style={{
            margin: 10,
            top: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar.Text
            size={50}
            label="MR"
            style={{ backgroundColor: colors.blue, marginRight: 10 }}
          />
          <View>
            <Title>Muhamad Ridho</Title>
            <Caption>+62 88806446929</Caption>
          </View>
        </View>
        <View style={{ margin: 10 }}>
          <Title>Akun</Title>
          <List.Item
            title="Ubah Profile"
            left={(props) => (
              <Ionicons name={"person"} color={colors.blue} size={30} />
            )}
            right={(props) => (
              <MaterialIcons
                name={"keyboard-arrow-right"}
                color={colors.blue}
                size={30}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Ubah Kata Sandi"
            left={(props) => (
              <MaterialCommunityIcons
                name={"lock"}
                color={colors.blue}
                size={30}
              />
            )}
            right={(props) => (
              <MaterialIcons
                name={"keyboard-arrow-right"}
                color={colors.blue}
                size={30}
              />
            )}
          />
          <Title>Tentang</Title>
          <List.Item
            title="Syarat dan ketentuan"
            left={(props) => (
              <MaterialCommunityIcons
                name={"newspaper-variant"}
                color={colors.blue}
                size={30}
              />
            )}
            right={(props) => (
              <MaterialIcons
                name={"keyboard-arrow-right"}
                color={colors.blue}
                size={30}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Kebijakan Privasi"
            left={(props) => (
              <MaterialIcons
                name={"privacy-tip"}
                color={colors.blue}
                size={30}
              />
            )}
            right={(props) => (
              <MaterialIcons
                name={"keyboard-arrow-right"}
                color={colors.blue}
                size={30}
              />
            )}
          />
          <Divider />
          <List.Item
            title="Pusat Bantuan"
            left={(props) => (
              <MaterialCommunityIcons
                name={"help-circle"}
                color={colors.blue}
                size={30}
              />
            )}
            right={(props) => (
              <MaterialIcons
                name={"keyboard-arrow-right"}
                color={colors.blue}
                size={30}
              />
            )}
          />
          <Button
            title="Sign Out"
            buttonStyle={{
              backgroundColor: colors.blue,
              marginTop: 50,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
