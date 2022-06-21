import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [featuredDrinks, setFeaturedDrinks] = useState([
    {
      title: "Carmella Latte",
      subtitle:
        "A latte with a blend of two classic falvoers - caramel and vanilla",
      price: "$5.00",
      // color1: "#F9AC8A",
      src: require("../assets/carmella_latte.png"),
      aspectRatio: 1,
      key: Math.random().toString(),
    },

    {
      title: "The Herbivore",
      subtitle: "A latte with the perfect blend of lavender and honey",
      price: "$5.00",
      // color1: "#4DD2A5",
      src: require("../assets/the_herbivore.png"),
      aspectRatio: 1,
      key: Math.random().toString(),
    },
    {
      title: "Bone Head",
      subtitle: "Drip coffee with a double shot of espress",
      price: "$5.00",
      // color1: "#FEB829",
      src: require("../assets/bonehead.png"),
      aspectRatio: 1,
      key: Math.random().toString(),
    },
    {
      title: "Nitro Cold Brew",
      subtitle:
        "COMING SOON - cold brew with the addition of nitrogen gas to create a smooth texture",
      price: "$5.00",
      // color1: "#FE8E01",
      src: require("../assets/nitro_cold_brew.png"),
      aspectRatio: 1,
      key: Math.random().toString(),
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.drinkTitle}>Featured Drinks</Text>
      <FlatList
        horizontal={true}
        data={featuredDrinks}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
              <Image source={item.src} />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null
  }
})
