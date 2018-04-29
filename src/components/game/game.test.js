import React from 'react';
import { mount, expect } from '../../test-helper';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Game from './game';
import { gameModes } from '../../model/types';
import Player from '../player/player';

describe('Game component', () => {
    describe('Structure test', () => {
        const mockStore = configureStore();
        let component, store, gameState;
        beforeEach(() => {
            gameState = {
                game: {
                    playerOneName: 'Player One',
                    playerTwoName: 'Player Two',
                    results: [],
                    score: '0 - 0',
                    mode: gameModes.PVC
                }
            };
            store = mockStore(gameState);

            component = mount(<Provider store={store}><Game {...gameState}/></Provider>).find(Game);
        });

        it('has the correct class', () => {
            expect(component.find('.game')).to.be.length(1);
        });

        it('has the correct header structure', () => {
            const header = component.find('header');
            const title = header.find('h1');

            expect(header).to.be.length(1);
            expect(title).to.be.length(1);
            expect(title.contains('Rock Paper Scissors')).to.equal(true);
        });

        it('has the correct section structure', () => {
            const section = component.find('section');
            const playerOne = section.find('.player-one');
            const playerTwo = section.find('.player-two');
            expect(section).to.be.length(1);
            expect(section.find('.player-one')).to.be.length(1);
            expect(section.find('.score')).to.be.length(1);
            expect(section.find('.player-two')).to.be.length(1);
            expect(section.find('.control')).to.be.length(1);
            expect(section.find('.control').find('.choice')).to.be.length(1);
            expect(section.find('button')).to.be.length(2);
            expect(playerOne.find(Player)).to.be.length(1);
            expect(playerTwo.find(Player)).to.be.length(1);
        });

        it('has the correct Player and score values', () => {
            const section = component.find('section');
            const playerOne = section.find('.player-one').find(Player);
            const playerTwo = section.find('.player-two').find(Player);

            expect(playerOne.props().playerName).to.be.eql(gameState.game.playerOneName);
            expect(playerTwo.props().playerName).to.be.eql(gameState.game.playerTwoName);
            // expect(section.find('.score').contains(gameState.game.score)).to.be.true;
        });
    });
});