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
        let filteredItems = []

        if(this.props.searchKeyword!== ''){
            filteredItems =this.props.items.filter(item=>{
                return (item.title.toUpperCase().includes(this.props.searchKeyword)||
                (item.competition.name.toUpperCase().includes(this.props.searchKeyword)));
            }); 
        }
        else{
            filteredItems = this.props.items;
        }

        const items = !this.props.isVideoPlayerOpen && 
        filteredItems.map((item, index) => 
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
    isVideoPlayerOpen: state.player.isVideoPlayerOpen,
    searchKeyword: state.items.searchKeyword
  });
  
export default connect(mapStateToProps, { fetchItems })(ItemsContainer);
