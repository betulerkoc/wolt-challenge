import React, { Component } from 'react';
import logo from './woltlogo.svg';
import {RestauranContext} from './context/restaurant'
import RestaurantList from './components/RestaurantList/index'
import {RootStyle, LogoStyle} from './style/index'

class App extends Component {

  static contextType = RestauranContext;
  render() {

  return (
    <RootStyle>
        <LogoStyle><img src={logo} alt="logo" /></LogoStyle>
        <RestaurantList/>
    </RootStyle>
  );
}
}
export default App;
