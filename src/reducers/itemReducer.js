import {FETCH_ITEMS, FILTER_ITEMS, ADD_FAV, REMOVE_FAV, FETCH_FAV} from '../actions/types'

const initialState = {
    items:[],
    searchKeyword:'',
    favItems: []
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
        case ADD_FAV:
            return{
                ...state,
                favItems: [action.payload, ...state.favItems]
            }
        case REMOVE_FAV:
            return{
                ...state,
                favItems: [...state.favItems.filter(i=> i !== action.payload)]
            }
        case FETCH_FAV:
            return{
                ...state,
                favItems: action.payload
            }
        default:
            return state;
    }

} 

