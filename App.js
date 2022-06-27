import react from "react";
import Navigation from "./routes/homeStack";
import { StyleSheet } from "react-native";
import {
  useFonts,
  YanoneKaffeesatz_400Regular,
  YanoneKaffeesatz_500Medium,
  YanoneKaffeesatz_700Bold,
} from "@expo-google-fonts/yanone-kaffeesatz";
import AppLoading from "expo-app-loading";

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)

export default function App() {
  let [fontsLoaded] = useFonts({
    YanoneKaffeesatz_400Regular,
    YanoneKaffeesatz_500Medium,
    YanoneKaffeesatz_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
});
