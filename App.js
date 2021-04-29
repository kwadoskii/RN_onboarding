import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "./app/screens/OnboardingScreen";
import LoginScreen from "./app/screens/LoginScreen";

const AppStack = createStackNavigator();

export default function App() {
  const [isInitialLaunch, setIsInitialLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched")
      .then((value) => {
        if (value !== null) return setIsInitialLaunch(false);

        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsInitialLaunch(true);
      })
      .catch((e) => {});
  }, []);

  if (isInitialLaunch === null) return null;

  return isInitialLaunch === true ? (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen} />
        <AppStack.Screen name="Login" component={LoginScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  ) : (
    <LoginScreen />
  );
}
