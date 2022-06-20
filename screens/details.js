import React, { useState } from "react";
import { StyleSheet, View, Text, Image, } from "react-native-check-box";
import { CheckBox } from "react-native-elements";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";

export default function Details({navigation}) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={globalStyles.container}>
            <Card>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('title')}</Text>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('subtitle')}</Text>
            <Image source={navigation.getParam('src')}/>
            <Text style={globalStyles.titleDescription}>{navigation.getParam('price')}</Text>
            <CheckBox
                style={{flex: 1, padding: 10}}
                onClick={()=>{
                this.setState({
                    isChecked:!this.state.isChecked
                })
                }}
                isChecked={this.state.isChecked}
                leftText={"CheckBox"}
            />
            </Card>
        </View>
    )
}