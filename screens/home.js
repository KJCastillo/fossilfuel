import React, { useState } from "react";
import {
  SafeAreaView,
  SectionList,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Card from "../shared/card";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const featuredDrinks = [
    {
      title: "Carmella Latte",
      subtitle:
        "A latte with a blend of two classic flavors - caramel and vanilla",
      price: "$5.00",
      src: require("../assets/carmella_latte.png"),
      key: Math.random().toString(),
    },

    {
      title: "The Herbivore",
      subtitle: "A latte with the perfect blend of lavender and honey",
      price: "$5.00",
      src: require("../assets/the_herbivore.png"),
      key: Math.random().toString(),
    },
    {
      title: "Bone Head",
      subtitle: "Drip coffee with a double shot of espresso",
      price: "$5.00",
      src: require("../assets/bonehead.png"),
      key: Math.random().toString(),
    },
    {
      title: "Nitro Cold Brew",
      subtitle:
        "COMING SOON - cold brew with the addition of nitrogen gas to create a smooth texture",
      price: "$5.00",
      src: require("../assets/nitro_cold_brew.png"),
      key: Math.random().toString(),
    },
  ];

  const classicCoffee = [
    {
      title: "Americano",
      subtitle: "Double shot of espresso with hot water",
      price: "$3.00",
      src: require("../assets/americano.png"),
      key: Math.random().toString(),
    },
    {
      title: "Latte",
      subtitle: "A double shot of espresso with creamy steamed milk",
      price: "$4.00",
      src: require("../assets/latte.png"),
      key: Math.random().toString(),
    },
    {
      title: "Cappuccino",
      subtitle: "Thick and airy steamed milk with a double shot of espresso",
      price: "$4.00",
      src: require("../assets/cappuccino.png"),
      key: Math.random().toString(),
    },
    {
      title: "Mocha",
      subtitle:
        "Double shot of espresso, real chocoalte, and creamy steamed milk",
      price: "$4.00",
      src: require("../assets/mocha.png"),
      key: Math.random().toString(),
    },
    {
      title: "Espresso",
      subtitle: "Strong and straight forward",
      price: "$2.00",
      src: require("../assets/espresso.png"),
      key: Math.random().toString(),
    },
    {
      title: "Drip Coffee",
      subtitle: "Always freshly brewed, medium roast",
      price: "$2.00",
      src: require("../assets/drip_coffee.png"),
      key: Math.random().toString(),
    },
    {
      title: "Cortado",
      subtitle:
        "Double shot of espresso with a 1:1 steamed milk ratio, simple yet intense",
      price: "$4.00",
      src: require("../assets/cortado.png"),
      key: Math.random().toString(),
    },
    {
      title: "Cold Brew",
      subtitle:
        "Made by steeping coffee in water for a number of hours at cold temperature",
      price: "$4.00",
      src: require("../assets/cold_brew.png"),
      key: Math.random().toString(),
    },
    {
      title: "Hot Chocolate",
      subtitle: "A classic. Real Chocolate with creamy steamed milk",
      price: "$3.00",
      src: require("../assets/hot_chocolate.png"),
      key: Math.random().toString(),
    },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <SectionList
        numColumns={2}
        sections={[
          { title: "Our Specialty Drinks", data: featuredDrinks },
          { title: "Classic Coffee", data: classicCoffee },
        ]}
        renderSectionHeader={({ section }) => (
          <>
            <Text style={globalStyles.drinkTitle}>{section.title}</Text>
            <FlatList
              data={section.data}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Details", item)}
                >
                  <Card>
                    <Text style={globalStyles.titleText}>{item.title}</Text>
                    <Image source={item.src} />
                  </Card>
                </TouchableOpacity>
              )}
            />
          </>
        )}
        renderItem={({ item }) => null}
      />
    </SafeAreaView>
  );
}
