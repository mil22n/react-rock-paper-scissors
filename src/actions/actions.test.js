import { expect } from '../test-helper';
import {NEW_GAME, PLAY_ROUND, SET_GAME_MODE, SET_PLAYER_CHOICE} from './types';
import { newGame, playRound, setGameMode, setPlayerChoice } from './'

describe('Actions', () => {
    describe('newGame', () => {
        it('has the correct type and payload', () => {
            const game = { toState() { return {}; }};
            const action = newGame(game);

            expect(action.type).to.equal(NEW_GAME);
            expect(action.payload).to.eql(game.toState())
        });
    });

    describe('playRound', () => {
        it('has the correct type and payload', () => {
            const game = {
                state: {},
                toState() { return this.state; },
                playRound() { this.state = { test: 'test'}}
            };
            const action = playRound(game);

            expect(action.type).to.equal(PLAY_ROUND);
            expect(action.payload).to.eql(game.toState());
        });
    });

    describe('setGameMode', () => {
        it('has the correct type and payload', () => {
            const mode = 'mode';
            const action = setGameMode(mode);
            expect(action.type).to.equal(SET_GAME_MODE);
            expect(action.payload).to.equal(mode);
        });
    });

    describe('setPlayerChoice', () => {
        it('has the correct type and payload', () => {
            const choice = 'choice';
            const action = setPlayerChoice(choice);
            expect(action.type).to.equal(SET_PLAYER_CHOICE);
            expect(action.payload).to.equal(choice);
        });
    });
});