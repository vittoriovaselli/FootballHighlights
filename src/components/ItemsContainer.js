import React, { Component } from 'react';
import {fetchItems} from '../actions/itemActions';
import {fetchFavourites} from '../actions/itemActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Item from './Item';
import Nav from 'react-bootstrap/Nav'

const FAV_KEY = 'FAVOURITES';


class ItemsContainer extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            showFavourites:false
        }


        this.onClick = this.onClick.bind(this);
        this.isFavourite = this.isFavourite.bind(this);
    }



    onClick(e){
        e.preventDefault();
        let url = e.target.href.split('/').pop();
        if(url === 'favourites'){
            this.setState({showFavourites: true});
        }
        else{
            this.setState({showFavourites: false});
        }
    }

    componentDidMount(){
        this.props.fetchItems();
        this.props.fetchFavourites();
    }

    componentDidUpdate(){
        localStorage.setItem(FAV_KEY, JSON.stringify(this.props.favItems));
    }

    isFavourite(item){
        return this.props.favItems.find(e=>e.title === item.title)?true:false;
    }


    render() {
        let filteredItems = []
        let currentItems = this.state.showFavourites?this.props.favItems: this.props.items;

        if(this.props.searchKeyword!== ''){
            filteredItems = currentItems.filter(item=>{
                return (item.title.toUpperCase().includes(this.props.searchKeyword)||
                (item.competition.name.toUpperCase().includes(this.props.searchKeyword)));
            }); 
        }
        else{
            filteredItems = currentItems;
        }

        const items = !this.props.isVideoPlayerOpen && 
        filteredItems.map((item, index) => 
            <Item key={index} item={item} isFav={this.isFavourite(item)}/> 
            );

        const noItems = <h2 style={{marginTop:  '20%'}}>There are no videos here</h2>

        return (
            <div>
                <Nav variant="tabs" defaultActiveKey="/home" >               
                    <Nav.Item>
                        <Nav.Link href="/home" onClick={this.onClick}>All videos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/favourites" onClick={this.onClick}>
                            Favourites ({this.props.favItems.length})
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <div className='flex-row'>                
                    {items.length>0?items:noItems}
                </div>
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
    favItems :  state.items.favItems,
    isVideoPlayerOpen: state.player.isVideoPlayerOpen,
    searchKeyword: state.items.searchKeyword
  });
  
export default connect(mapStateToProps, { fetchItems, fetchFavourites })(ItemsContainer);
