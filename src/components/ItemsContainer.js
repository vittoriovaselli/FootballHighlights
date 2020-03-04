import React, { Component } from 'react';
import {fetchItems} from '../actions/itemActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Item from './Item';


class ItemsContainer extends Component {
    
    componentDidMount(){
        this.props.fetchItems();
    }


    render() {
        
        const items = !this.props.isVideoPlayerOpen && 
        this.props.items.map((item, index) => 
            <Item key={index} item={item}/> 
            );
        return (
        <div className='flex-row'>
            {items}
        </div>
        );
    }
}

ItemsContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    isVideoPlayerOpen:  PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    items: state.items.items,
    isVideoPlayerOpen: state.player.isVideoPlayerOpen
  });
  
export default connect(mapStateToProps, { fetchItems })(ItemsContainer);
