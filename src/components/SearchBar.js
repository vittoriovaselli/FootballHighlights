import React, { Component } from 'react';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';
import {filterItems} from '../actions/itemActions';


class SearchBar extends Component {

    constructor(props){
      super(props);
      this.state = {
        keyword:''
      }

      this.onChange =  this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.resetFilter = this.resetFilter.bind(this);
    }
    
    onChange(e){
      this.setState({ keyword: e.target.value });
    }

    onSubmit(e){
      e.preventDefault();
      this.props.filterItems(this.state.keyword.trim().toUpperCase());
    }

    resetFilter(){
      this.setState({keyword:''})
      this.props.filterItems('');
    }


    render() {
        

        return (
        <Form inline onSubmit={this.onSubmit}>
            <FormControl type="text" onChange={this.onChange} placeholder="Search" className="mr-sm-2" />
            <Button variant="success" type="submit" className="search-buttons" >Search</Button>
            <Button variant="danger" type="reset" onClick={this.resetFilter} className="search-buttons">Reset</Button>
        </Form>
        
        );
    }
}


  
export default connect (null, {filterItems})(SearchBar) ;