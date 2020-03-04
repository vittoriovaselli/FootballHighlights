import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {togglePlayer} from '../actions/playerActions'
import {PropTypes} from 'prop-types';
import { connect } from 'react-redux';

 


class Item extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }


    onClick(e){
        //get link from embed
        let link = this.props.item.embed.split('src=')[1].split('\'')[1]
        this.props.togglePlayer(link);
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
            <Button onClick={this.onClick}>Watch video</Button>
            </Card.Body>
        </Card>
        );
    }
}

Item.propTypes = {
    togglePlayer: PropTypes.func.isRequired,
};


  
export default connect(null, {togglePlayer})(Item ); 
