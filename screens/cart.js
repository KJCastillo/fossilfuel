import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function Cart() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.checkout}>Checkout</Text>
    </View>
  );
}
