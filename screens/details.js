import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Details({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleText}>{navigation.getParam('subtitle')}</Text>
            <Text style={globalStyles.titleText}>{navigation.getParam('price')}</Text>
        </View>
    )
}