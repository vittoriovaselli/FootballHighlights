import {FETCH_ITEMS, FILTER_ITEMS} from '../actions/types'

const initialState = {
    items:[],
    searchKeyword:''
};

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_ITEMS:
            return{
                ...state,
                items: action.payload
            }
        case FILTER_ITEMS:
            return{
                ...state,
                searchKeyword: action.payload
            }
        default:
            return state;
    }

} 

