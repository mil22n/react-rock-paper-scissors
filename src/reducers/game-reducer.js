import {NEW_GAME, PLAY_ROUND, SET_GAME_MODE, SET_PLAYER_CHOICE} from '../actions/types';

export default function(state = {}, action = { type: '' }) {
    switch (action.type) {
        case NEW_GAME:
        case PLAY_ROUND:
            return {...state, ...action.payload};
        case SET_GAME_MODE:
            return {...state, ...{ mode: action.payload }};
        case SET_PLAYER_CHOICE:
            return {...state, ...{ choice: action.payload }};
        default:
            return state;
    }
}
