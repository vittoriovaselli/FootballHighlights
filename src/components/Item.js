import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {togglePlayer} from '../actions/playerActions';
import {addFavItem} from '../actions/itemActions';
import {removeFavItem} from '../actions/itemActions';
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';

 


class Item extends Component {
    constructor(props){
        super(props);



        this.onWatchClick = this.onWatchClick.bind(this);
        this.onAddFavClick = this.onAddFavClick.bind(this);
    }
   
    onWatchClick(){
        //get link from embed
        let link = this.props.item.embed.split('src=')[1].split('\'')[1]
        this.props.togglePlayer(link);
    }

    onAddFavClick(){
        if(!this.props.isFav){    
            this.props.addFavItem(this.props.item);   
        }
        else{
            this.props.removeFavItem(this.props.item);
        }
    }
    
    render() {
       
        return (
        <Card style={{ width: '25rem'}}>
            <Card.Img variant="top" src={this.props.item.thumbnail} />
            <Card.Body>
            <Card.Title>
                <a href={this.props.item.side1.url}>{this.props.item.side1.name}</a><br/>vs<br/>
                <a href={this.props.item.side2.url}>{this.props.item.side2.name}</a>
            </Card.Title>
            <Card.Text>
                <a href={this.props.item.competition.url}>{this.props.item.competition.name}</a><br/>
                <br/>
                {new Date(this.props.item.date).toLocaleString()}
                <br/>
            </Card.Text>
            <Button variant='success' onClick={this.onWatchClick}>Watch video</Button>
            <Button variant='warning' onClick={this.onAddFavClick}>
                {this.props.isFav?'Remove favourite':'Add favourite'} 
            </Button>
            </Card.Body>
        </Card>
        );
    }
}

Item.propTypes = {
    togglePlayer: PropTypes.func.isRequired,
};


  
export default connect(null, {togglePlayer, addFavItem, removeFavItem})(Item ); 
