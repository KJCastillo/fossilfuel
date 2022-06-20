import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Details from "../screens/details";

//navigation
const screens = {
    Home: {
        screen: Home, 
    navigationOptions: {
            title: 'Fossil Fuel Coffee Co.'
        }
    },
    Details: {
        screen: Details,
        navigationOptions: {
            title: 'Coffee Details'
        }
    }
}
//import components on top and create screens const to pass below

const HomeStack = createStackNavigator(screens, {
     defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#E64A33'
        },
        headerTitleStyle: {
            color: 'white'
        }
    }
});

export default createAppContainer(HomeStack);
//returns a component that can render to app.js, all info about navigation stack
//by default it'll show Home screen first, then Details as it's stacked this way