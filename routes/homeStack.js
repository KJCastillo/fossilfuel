import { createStackNavigator } from "@react-navigation/stack";
//import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { globalStyles } from "../styles/global";
import Home from "../screens/home";
import Details from "../screens/details";

// const screens = {
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: "Fossil Fuel Coffee Co.",
//     },
//   },
//   Details: {
//     screen: Details,
//     navigationOptions: {
//       title: "Coffee Details",
//     },
//   },
// };

// const HomeStack = createStackNavigator(screens, {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: "#E64A33",
//     },
//     headerTitleStyle: {
//       color: "white",
//       textAlign: 'center',
//     },
//   },
// });

// export default createAppContainer(HomeStack);

const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
    <HomeStack.Screen name="Details" component={Details}/>
  </HomeStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <HomeStackScreen/>
  </NavigationContainer>
);