import React, { useEffect, useState } from "react";
import { View, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Avatar, Title, Caption, List, Divider } from "react-native-paper";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../../utils/colors";
import { Button } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const heightScreen = Dimensions.get("window").height;

const Profile = ({ navigation }: any) => {
  const [user, setUser] = useState<any>({});
  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");
    if (result !== null) {
      setUser(JSON.parse(result));
    }
  };
  useEffect(() => {
    findUser();
    // AsyncStorage.clear();
  }, []);
  const name = user.name;
  const handleLogout = () => {
    AsyncStorage.clear();
    navigation.navigate("WelcomeScreen", { screen: "Login" });
  };
  return (
    <ScrollView>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("DetailProfile")}>
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
              // label={`${name.slice(0, 1)}`}
              label={name}
              style={{ backgroundColor: colors.blue, marginRight: 10 }}
            />
            <View>
              <Title>{name}</Title>
              <Caption>+62 88806446929</Caption>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{ margin: 10 }}>
          {/* <Title>Pengaturan</Title>
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
          /> */}
          <Title>Tentang</Title>
          <TouchableOpacity onPress={() => navigation.navigate("Requirement")}>
            <List.Item
              title="Tentang"
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
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            onPress={() => navigation.navigate("PrivacyPolicy")}
          >
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
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={() => navigation.navigate("HelpCenter")}>
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
          </TouchableOpacity>
          <Button
            title="Sign Out"
            buttonStyle={{
              backgroundColor: colors.blue,
              marginTop: 50,
            }}
            onPress={handleLogout as any}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
