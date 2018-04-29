import { NEW_GAME } from '../actions/types';

export default function(state = {}, action = { type: '' }) {
    switch (action.type) {
        case NEW_GAME:
            return {...action.payload};
        default:
            return state;
    }
}
