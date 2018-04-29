import { expect } from '../test-helper';
import {NEW_GAME, PLAY_ROUND} from "../actions/types";
import GameReducer from './game-reducer';

describe('Game reducer', () => {
    it('handles action with unknown type', () => {
        expect(GameReducer()).to.be.eql({})
    });

    it('handles NEW_GAME action', () => {
        const payload = { test: 'payload' };
        const action = { type: NEW_GAME, payload };

        expect(GameReducer({}, action)).to.eql(payload);
    });

    it('handles PLAY_ROUND action', () => {
        const payload = { test: 'payload' };
        const action = { type: PLAY_ROUND, payload };

        expect(GameReducer({}, action)).to.eql(payload);
    });
});