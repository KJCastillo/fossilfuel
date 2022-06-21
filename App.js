import react from "react";
import Navigation from './routes/homeStack';
//import Navigator from './routes/homeStack';
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useFonts, YanoneKaffeesatz_400Regular, YanoneKaffeesatz_500Medium, YanoneKaffeesatz_700Bold } from '@expo-google-fonts/yanone-kaffeesatz'
import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    YanoneKaffeesatz_400Regular, YanoneKaffeesatz_500Medium, YanoneKaffeesatz_700Bold
  });

    if(!fontsLoaded){
      return <AppLoading />
    }
    return (
      <Navigation />
      //<Navigator />
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  }
})