import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import * as screens from '../components/index'

// Create our stack navigator


const TabNavigator = createBottomTabNavigator({
  Home: screens.homePage,
  LoginPage: screens.LoginPage,
});

// And the app container
export let Navigation = createAppContainer(TabNavigator);