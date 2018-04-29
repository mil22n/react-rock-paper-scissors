import { expect } from '../test-helper';
import { NEW_GAME} from './types';
import { newGame } from './'

describe('Actions', () => {
    describe('newGame', () => {
        it('has the correct type and payload', () => {
            const game = { toState() { return ''; }};
            const action = newGame(game);

            expect(action.type).to.equal(NEW_GAME);
            expect(action.payload).to.eql(game.toState())
        });
    });
});