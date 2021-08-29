import React, { Fragment } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import { Button } from "react-native-elements";
import Slide, { SLIDE_HEIGHT } from "../../component/Slide";
import Subslide from "../../component/Subslide";
import colors from "../../utils/colors";
// import { ScrollView } from "react-native-gesture-handler";
import { useValue, interpolateColor, multiply } from "react-native-reanimated";
const BORDER_RADIUS = 75;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: colors.blue,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  { title: "Relaxed", subtitle: "Find Your Outfits", description: "no" },
  { title: "Playful", subtitle: "Hear it", description: "yes" },
  { title: "Excentric", subtitle: "Your style", description: "no" },
  { title: "Funky", subtitle: "Look Good", description: "yes" },
];

const Welcome = ({ navigation }: any) => {
  const x = useValue(0);
  // const backgroundColor = interpolateColor(x, {
  //   inputRange: [0, width * 2, width *3],

  // });
  return (
    <View style={styles.container}>
      <Animated.View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: colors.blue,
          }}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
              flex: 1,
            },
          ]}
        >
          {slides.map(({ subtitle }, index) => (
            <Subslide
              key={index}
              last={index === slides.length - 1}
              {...{ subtitle }}
            />
          ))}
        </Animated.View>
      </View>
      <Button
        title="GET STARTED"
        buttonStyle={{
          backgroundColor: colors.darkBlue,
          width: width / 2,
          alignSelf: "center",
          marginBottom: 30,
        }}
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

export default Welcome;
