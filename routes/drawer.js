import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
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