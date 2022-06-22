import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons";
import FontAwesome  from '@expo/vector-icons';
import Home from "../screens/home";
import Details from "../screens/details";
import Cart from "../screens/cart";

//home and details stack
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#E64A33' }, headerTitleStyle: { color: 'white', textAlign: 'center'} }}>
    <HomeStack.Screen name="Fossil Fuel Coffee Co." component={Home} options={({}) => {
      return {
        headerTitleAlign: 'center'
      }
    }}/>
    <HomeStack.Screen name="Details" component={Details} options={({ route }) => {
      return {
        headerTitle: route.params.title,
        headerTitleAlign: 'center'
      }
    }}/>
  </HomeStack.Navigator>
);

//cart stack for tab inclusion
const CartStack = createStackNavigator();
const CartStackScreen = () => (
  <CartStack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#E64A33' }, headerTitleStyle: { color: 'white'} }}>
    <CartStack.Screen name="Shopping Cart" component={Cart} options={({}) => {
      return {
        headerTitleAlign: 'center'
      }
    }}/>
  </CartStack.Navigator>
)

//tab screen output
const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#E64A33' } }} >
    <AppTabs.Screen name="Home" component={HomeStackScreen} />
    <AppTabs.Screen name="Cart" component={CartStackScreen} />
  </AppTabs.Navigator>
)

export default () => (
  <NavigationContainer >
    {/* <HomeStackScreen /> */}
    <AppTabsScreen />
  </NavigationContainer>
);