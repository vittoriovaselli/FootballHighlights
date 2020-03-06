import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';

import store from './store';
import ItemsContainer from './components/ItemsContainer'
import Player from './components/Player';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';


class App extends Component {
  render() {

    return (
      <Provider store={store}>
        <div className="App">
          <div>
            <Header/>
            <SearchBar/>
            <ItemsContainer/> 

          </div>
          <Player/>    
          <Footer/>
        </div>
      </Provider>
    );
  }
}



export default App;
