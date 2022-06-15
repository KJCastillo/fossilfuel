import react from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./screens/header";
import Home from "./screens/home";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f1e7",
    flex: 1,
  }
})