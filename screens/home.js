import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    
    const [featuredDrinks, setFeaturedDrinks] = useState([
        {
          title: "Carmella Latte",
          subtitle: "A latte with a blend of two classic falvoers - caramel and vanilla",
          price: "$5.00",
          src: require('../assets/carmella_latte.png'),
          // color2: "#FBC6AE",
          // picture: require("./assets/rose.png"),
          aspectRatio: 1,
          key: Math.random().toString() 
        },
      
        {
          title: "The Herbivore",
          subtitle: "A latte with the perfect blend of lavender and honey",
          price: "$5.00",
          src: require('../assets/the_herbivore.png'),
          // color2: "#63D8B0",
          // picture: require("./assets/philharmonic.png"),
          aspectRatio: 1,
          key: Math.random().toString()
        },
        {
          title: "Bone Head",
          subtitle: "Drip coffee witha double shot of espress",
          price: "$5.00",
          src: require('../assets/bonehead.png'),
          // color2: "#FDD446",
          // picture: require("./assets/coldbrew.png"),
          aspectRatio: 1,
          key: Math.random().toString()
        },
        {
          title: "Nitro Cold Brew",
          subtitle: "COMING SOON - cold brew with the addition of nitrogen gas to create a smooth texture",
          price: "$5.00",
          src: require('../assets/nitro_cold_brew.png'),
          // color2: "#FF9A16",
          // picture: require("./assets/dark.png"),
          aspectRatio: 1,
          key: Math.random().toString()
        }
      ]);

    return (
            <View style={globalStyles.container}>
               <FlatList 
               data={featuredDrinks}
               renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text style={globalStyles.titleText}>
                        {item.title}
                    </Text>
                    <Image source={item.src}/>
                </TouchableOpacity>
               )}
               />
            </View>
    )
}