import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    items: itemReducer,
    player: playerReducer
});