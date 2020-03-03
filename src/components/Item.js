import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

 


class Item extends Component {
    
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
                
                </Card.Text>
            </Card.Body>
        </Card>
        );
    }
}

  
export default Item;
