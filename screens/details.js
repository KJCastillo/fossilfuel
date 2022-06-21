import React, { useState } from "react";
import { View, Text, Image, Button} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Details({navigation, route}) {
   const title = route.params.title
   const subtitle = route.params.subtitle
   const price = route.params.price
   const pic = route.params.src
    return (
        <View style={globalStyles.container}>
            {/* <Card>
            <Text style={globalStyles.drinkTitle}>{navigation.getParam('title')}</Text>
            <Image source={navigation.getParam('src')}/>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('subtitle')}</Text>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('price')}</Text>
            <Button style={globalStyles.cartButton} title="Add to Cart" color="#E64A33"/>
            </Card> */}
            <Card>
            <Text style={globalStyles.drinkTitle}>{title}</Text>
            <Image source={pic}/>
            <Text style={globalStyles.titleDescription}>{subtitle}</Text>
            <Text style={globalStyles.titleDescription}>{price}</Text>
            <Button style={globalStyles.cartButton} title="Add to Cart" color="#E64A33"/>
            </Card>
        </View>
    )
}