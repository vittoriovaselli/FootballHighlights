import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Header from './components/Header'


import store from './store';
import ItemsContainer from './components/ItemsContainer'
import Player from './components/Player';

class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
        <Header/>
        <ItemsContainer/> 
        <Player/>
      </div>
      </Provider>
    );
  }
}



export default App;
