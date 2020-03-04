import {TOGGLE_PLAYER} from '../actions/types'

const initialState = {
    isVideoPlayerOpen: false,
    link: {}
};

export default function(state = initialState, action){
    switch(action.type){
        case TOGGLE_PLAYER:
            return{
                ...state,
                isVideoPlayerOpen: !state.isVideoPlayerOpen,
                link: action.payload
            }
        default:
            return state;
    }

} 