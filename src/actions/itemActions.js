import {FETCH_ITEMS, FILTER_ITEMS, ADD_FAV, REMOVE_FAV, FETCH_FAV} from './types'
const FAV_KEY = 'FAVOURITES';


export const fetchItems = () => dispatch =>{
    fetch('https://www.scorebat.com/video-api/v1/')
    .then(response => response.json())
    .then(items => 
        dispatch({
            type: FETCH_ITEMS,
            payload: items
        })
    );
}

export const filterItems = keyword => dispatch => {   

    dispatch({
        type: FILTER_ITEMS,
        payload: keyword
    })
}

export const addFavItem =  item => dispatch=>{
    dispatch({
        type:ADD_FAV,
        payload:  item
    })
}

export const removeFavItem = item => dispatch=>{
    dispatch({
        type:REMOVE_FAV,
        payload: item
    })
}

export const fetchFavourites = () =>dispatch =>{
    const fav = JSON.parse(localStorage.getItem(FAV_KEY))||[];

    dispatch({
        type:FETCH_FAV,
        payload: fav
    })
}

