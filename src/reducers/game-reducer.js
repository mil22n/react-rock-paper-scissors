import {NEW_GAME, PLAY_ROUND} from '../actions/types';

export default function(state = {}, action = { type: '' }) {
    switch (action.type) {
        case NEW_GAME:
        case PLAY_ROUND:
            return {...action.payload};
        default:
            return state;
    }
}
