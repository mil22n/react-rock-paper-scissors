import { combineReducers } from 'redux';
import GameReducer from './game-reducer';

const rootReducer = combineReducers({
    game: GameReducer
});

export default rootReducer;
