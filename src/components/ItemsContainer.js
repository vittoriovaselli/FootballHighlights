import React, { Component } from 'react';
import {fetchItems} from '../actions/itemActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';


class ItemsContainer extends Component {
    
    componentWillMount(){
        this.props.fetchItems();
    }


    render() {
        console.log(this.props.items);
        
        let id=0;
        const items = this.props.items.map(item => 
            <p key={id++}>{item.title}</p>
        );
        return (
        <div>
            {items}
        </div>
        );
    }
}

ItemsContainer.propTypes = {
    fetchItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    items: state.items.items,
  });
  
export default connect(mapStateToProps, { fetchItems })(ItemsContainer);
