import react from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "./styles/global";
import Navigator from './routes/homeStack'
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
      <View style={globalStyles.container}>
        <Navigator />
      </View>
    )
}