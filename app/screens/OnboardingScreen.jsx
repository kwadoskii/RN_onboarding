import React from "react";
import { View, ImageBackground } from "react-native";

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
        transitionAnimationDuration={650}
        titleStyles={{ fontSize: 32, fontWeight: "bold" }}
        subTitleStyles={{ fontSize: 20 }}
        containerStyles={{ paddingHorizontal: 10, paddingVertical: 25 }}
        pages={[
          {
            backgroundColor: "#EF436B",
            image: <OnboardingImage imageUri={require("../images/welcome.png")} />,
            title: "Welcome",
            subtitle: "We are happy to have you here.",
          },
          {
            backgroundColor: "#f07167",
            image: <OnboardingImage imageUri={require("../images/join.png")} />,
            title: "Join",
            subtitle: "Come onboard by joining us today.",
          },
          {
            backgroundColor: "#ffd166",
            image: <OnboardingImage imageUri={require("../images/post_online.png")} />,
            title: "Contribute",
            subtitle: "Post, like, comment and share articles to earn points.",
          },
          {
            backgroundColor: "#aad576",
            image: <OnboardingImage imageUri={require("../images/wallet.png")} />,
            title: "Earn",
            subtitle: "Be among the top contributors and earn.",
          },
        ]}
      />
    </Screen>
  );
}
