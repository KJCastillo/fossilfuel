import { createStackNavigator } from "react-navigation-stack";
import Cart from "...screens/cart"

//navigation
const screens = {
    Cart: {
        screen: Cart, 
    navigationOptions: {
            title: 'Fossil Fuel Coffee Co. Cart'
        }
    }
}
//import components on top and create screens const to pass below

const CartStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E64A33'
        },
        headerTitleStyle: {
            color: 'white'
        }
    }
});

export default CartStack;
