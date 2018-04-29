import { expect } from '../test-helper';
import { NEW_GAME, PLAY_ROUND } from './types';
import { newGame, playRound } from './'

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
    })
});