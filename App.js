import react from "react";
import Navigator from './routes/homeStack';
import { NavigationContainer } from "@react-navigation/native";
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
      <NavigationContainer>
         <Navigator />
      </NavigationContainer>
    )
}
