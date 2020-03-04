import React, { Component } from 'react';
import logo from '../logo.svg';


class Header extends Component {
    

    render() {
        

        return (
        <div className="App-header">
            <img src={logo} alt='logo' className="logo"/>
            <h2>Football Highlights</h2>
        </div>
        );
    }
}


  
export default Header;
