import react, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
//import Header from "./screens/header";
import Home from "./screens/home";
import Navigator from './routes/homeStack'

export default function App() {


  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})