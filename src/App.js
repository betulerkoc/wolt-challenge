import React, { Component } from 'react';
import logo from './woltlogo.svg';
import {RestaurantContext} from './context/restaurant'
import RestaurantList from './components/RestaurantList/index'
import Sort from './components/Sort/index'
import {RootStyle, LogoStyle} from './style/index'

class App extends Component {

  static contextType = RestaurantContext;
  render() {

  return (
    <RootStyle>
        <LogoStyle><img src={logo} alt="logo" /></LogoStyle>
        <Sort/>
        <RestaurantList/>
    </RootStyle>
  );
}
}
export default App;
