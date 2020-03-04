import {FETCH_ITEMS, FILTER_ITEMS} from './types'

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

