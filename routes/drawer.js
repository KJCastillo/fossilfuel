import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import HomeStack from "./homeStack";
import CartStack from "./cartStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Cart: {
        screen: CartStack,
    }
})

export default createAppContainer(RootDrawerNavigator);