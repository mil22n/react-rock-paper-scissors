import { expect } from '../test-helper';
import GameModel from './game';
import PlayerModel from './player';
import { gameModes, outcomes }from './types';

describe('Model', () => {

    describe('Game', () => {
        let game;
        beforeEach(() => {
            game = new GameModel();
        });

        it('instantiates the game with correct default values', () => {
            expect(game.playerOne).to.exist;
            expect(game.playerTwo).to.exist;
            expect(game.results).to.exist;
            expect(game.score).to.exist;
            expect(game.playRound).to.exist;
            expect(game.updateScore).to.exist;
            expect(game.toState).to.exist;

            expect(game.playerOne).to.be.instanceOf(PlayerModel);
            expect(game.playerTwo).to.be.instanceOf(PlayerModel);
            expect(game.results).to.be.length(0);
            expect(game.score).to.eql([0, 0]);
        });

        it('instantiates the game with correct values passed to the constructor', () => {
            const playerOne = 'One';
            const playerTwo = 'Two';
            const results = [{playerOneOutcome: 'ROCK', playerTwoOutcome: 'SCISSORS', winner: 'One'}];
            const score = [1, 1];
            const game = new GameModel(playerOne, playerTwo, gameModes.PVC, results, score);

            expect(game.playerOne.name).to.be.equal(playerOne);
            expect(game.playerTwo.name).to.be.equal(playerTwo);
            expect(game.mode).to.be.eql(gameModes.PVC);
            expect(game.results).to.be.eql(results);
            expect(game.score).to.be.eql(score);
        });

        it('changes state after round is played', () => {
            const gameState = {... game.toState()};
            game.playRound();
            expect(game.toState()).to.not.eql(gameState);
            expect(game.results).to.be.length(gameState.results.length + 1);
        });
    });

    describe('Player', () => {
        let player, outcomeNames;
        beforeEach(() => {
            player = new PlayerModel('Name');
            outcomeNames = Object.keys(outcomes);
        });

        it('instantiates the player with correct name', () => {
           expect(player.name).to.equal('Name');
           expect(player.playCPU).to.exist;
        });

        it('returns an outcome when playCPU is called', () => {
            const outcome = player.playCPU();
            expect(outcomeNames.indexOf(outcome)).to.be.gte(0);
        });

    });
});