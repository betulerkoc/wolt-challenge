import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {RestauranContext} from './context/restaurant'
import RestaurantList from './components/RestaurantList'

class App extends Component {

  static contextType = RestauranContext;
  render() {
    const value = this.context;
  return (
    <div className="App">
      <header className="App-header">
        
        <RestaurantList/>

      </header>
    </div>
  );
}
}
export default App;
