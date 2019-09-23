import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './navigation/rootNavigator'
import store from './redux/store';
import { StatusBar} from 'react-native';
import FullScreen from 'react-native-full-screen'

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        FullScreen.onFullScreen();
        console.reportErrorsAsExceptions = false;
    }
    render() {
        return (

            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    } 
}