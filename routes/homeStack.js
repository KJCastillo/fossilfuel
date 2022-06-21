import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Image, StyleSheet } from "react-native";
import Home from "../screens/home";
import Details from "../screens/details";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Fossil Fuel Coffee Co.",
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: "Coffee Details",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#E64A33",
    },
    headerTitleStyle: {
      color: "white",
      textAlign: 'center',
    },
  },
});

export default createAppContainer(HomeStack);