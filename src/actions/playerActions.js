import {TOGGLE_PLAYER} from './types'

export const togglePlayer = link => dispatch =>{
    dispatch({
        type: TOGGLE_PLAYER,
        payload: link
    })
}
