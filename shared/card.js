import react from "react";
import { StyleSheet, ScrollView, View } from "react-native";

export default function Card(props){
    return(
        <ScrollView style={styles.card}>
            <View style={styles.cardContent}>
                { props.children }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#f7f1e7',
        shadowOffset: {width:1, height:1},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        marginBottom: 40,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    }
})