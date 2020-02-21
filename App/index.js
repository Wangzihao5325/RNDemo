/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import store from '../store/index';
import Router from './Router';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//import NavigationService from './router/NavigationService';

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <Router
        //ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef); }}
        />
      </SafeAreaProvider>
    )
  }
}
