import react from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "./styles/global";
import Navigator from './routes/homeStack'

export default function App() {


  return (
    <View style={globalStyles.container}>
      <Navigator />
    </View>
  );
}