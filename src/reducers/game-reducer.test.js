import { expect } from '../test-helper';
import {NEW_GAME, PLAY_ROUND, SET_GAME_MODE, SET_PLAYER_CHOICE} from "../actions/types";
import GameReducer from './game-reducer';
import {gameModes} from "../model/types";

describe('Game reducer', () => {
    it('handles action with unknown type', () => {
        expect(GameReducer()).to.be.eql({ mode: null, gameModes })
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

    it('handles SET_GAME_MODE action', () => {
        const gameMode = { mode: 'mode' };
        const action = { type: SET_GAME_MODE, payload: gameMode.mode };

        expect(GameReducer({}, action)).to.eql(gameMode);
    });

    it('handles SET_PLAYER_CHOICE action', () => {
        const playerChoice = { choice: 'choice' };
        const action = { type: SET_PLAYER_CHOICE, payload: playerChoice.choice };

        expect(GameReducer({}, action)).to.eql(playerChoice);
    });
});