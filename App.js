import react, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./screens/header";
import Home from "./screens/home";

export default function App() {

  const [featuredDrinks, setFeaturedDrinks] = useState([
    {
      title: "Carmella Latte",
      subtitle: "A latte with a blend of two classic falvoers - caramel and vanilla",
      price: "$5.00",
      // color1: "#F9AC8A",
      // color2: "#FBC6AE",
      // picture: require("./assets/rose.png"),
      aspectRatio: 1,
      key: Math.random().toString() 
    },
  
    {
      title: "The Herbivore",
      subtitle: "A latte with the perfect blend of lavender and honey",
      price: "$5.00",
      // color1: "#4DD2A5",
      // color2: "#63D8B0",
      // picture: require("./assets/philharmonic.png"),
      aspectRatio: 1,
      key: Math.random().toString()
    },
    {
      title: "Bone Head",
      subtitle: "Drip coffee witha double shot of espress",
      price: "$5.00",
      // color1: "#FEB829",
      // color2: "#FDD446",
      // picture: require("./assets/coldbrew.png"),
      aspectRatio: 1,
      key: Math.random().toString()
    },
    {
      title: "Nitro Cold Brew",
      subtitle: "COMING SOON - cold brew with the addition of nitrogen gas to create a smooth texture",
      price: "$5.00",
      // color1: "#FE8E01",
      // color2: "#FF9A16",
      // picture: require("./assets/dark.png"),
      aspectRatio: 1,
      key: Math.random().toString()
    }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <Home featuredDrinks={featuredDrinks} setFeaturedDrinks={setFeaturedDrinks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f1e7",
    flex: 1,
  }
})