import React, { useState } from "react";
import { ScrollView, View, Text, Image, Button } from "react-native";
import { globalStyles } from "../styles/global";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import Card from "../shared/card";

export default function Details({ navigation, route }) {
  const [addToCart, setAddToCart] = useState();
  const title = route.params.title;
  const subtitle = route.params.subtitle;
  const price = route.params.price;
  const pic = route.params.src;

  const [ice, setIce] = useState(false);
  const [checked, setChecked] = useState(false);
  var radio_props = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 },
  ];

  return (
    <View style={globalStyles.container}>
      <ScrollView>
        <Card>
          <Text style={globalStyles.drinkTitle}>{title}</Text>
          <Image source={pic} />
          <Text style={globalStyles.titleDescription}>{subtitle}</Text>
          <Text style={globalStyles.titleDescription}>{price}</Text>
          <Text style={globalStyles.titleDescription}>
            Make it Iced
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              formHorizontal={true}
              selectedButtonColor={"#E64A33"}
              buttonColor={"#E64A33"}
              onPress={() => {
                setIce(!ice);
              }}
            ></RadioForm>
          </Text>
          <Text style={globalStyles.titleDescription}>
            Extra Shot of Espresso - $1
            <RadioForm
              radio_props={radio_props}
              initial={-1}
              formHorizontal={true}
              selectedButtonColor={"#E64A33"}
              buttonColor={"#E64A33"}
              onPress={() => {
                setChecked(!checked);
              }}
            ></RadioForm>
          </Text>
          <Button
            style={globalStyles.cartButton}
            title="Add to Cart"
            color="#E64A33"
            onPress={() => console.log(ice, checked)}
          />
        </Card>
      </ScrollView>
    </View>
  );
}
