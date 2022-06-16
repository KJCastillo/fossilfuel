import React from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({featuredDrinks, setFeaturedDrinks}) {
    return (
        <View>
            <Text style={globalStyles.container}>Home Screen</Text>
            <View>
               <FlatList 
               data={featuredDrinks}
               renderItem={({item}) => (
                <TouchableOpacity>
                    <Text style={globalStyles.container}>
                        {item.title}
                    </Text>
                </TouchableOpacity>

               )}
               />
            </View>
        </View>
    )
}
