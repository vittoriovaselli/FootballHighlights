import {FETCH_ITEMS} from './types'

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

