import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';


export default class App extends React.Component {
  render() {
    return (
        <RootStack/>
    );
  }
}

const RootStack = new createStackNavigator({
    Home: { screen: Home },
  },
);