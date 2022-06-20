import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Details({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('subtitle')}</Text>
            <Image source={navigation.getParam('src')}/>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('price')}</Text>
            </Card>
        </View>
    )
}