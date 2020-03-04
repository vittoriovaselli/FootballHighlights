import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import store from './store';
import ItemsContainer from './components/ItemsContainer'
import Player from './components/Player';
import Header from './components/Header'
import SearchBar from './components/SearchBar';


class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <Header/>
          <SearchBar/>
          <ItemsContainer/> 
          <Player/>
        </div>
      </Provider>
    );
  }
}



export default App;
