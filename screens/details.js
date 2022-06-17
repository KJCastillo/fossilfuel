import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Details({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('subtitle')}</Text>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('price')}</Text>
        </View>
    )
}