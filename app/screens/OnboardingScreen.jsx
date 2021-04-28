import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import Screen from "../components/Screen";

const OnboardingImage = ({ imageUri }) => {
  return (
    <View style={{ width: "60%", height: "60%" }}>
      <ImageBackground
        style={{ width: "100%", height: "100%" }}
        source={imageUri}
        resizeMode="contain"
      />
    </View>
  );
};

export default function OnboardingScreen({ navigation }) {
  return (
    <Screen>
      <Onboarding
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: "#6c63ff",
            image: <OnboardingImage imageUri={require("../images/welcome.png")} />,
            title: "Welcome",
            subtitle: "We are happy to have you here.",
          },
          {
            backgroundColor: "#fd4184",
            image: <OnboardingImage imageUri={require("../images/join.png")} />,
            title: "Join",
            subtitle: "Come onboard by joining us today.",
          },
          {
            backgroundColor: "#fddd41",
            image: <OnboardingImage imageUri={require("../images/post_online.png")} />,
            title: "Contribute",
            subtitle: "Post, like, comment and share articles to earn points.",
          },
          {
            backgroundColor: "#7fbc65",
            image: <OnboardingImage imageUri={require("../images/wallet.png")} />,
            title: "Earn",
            subtitle: "Be among the top contributors and earn.",
          },
        ]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
